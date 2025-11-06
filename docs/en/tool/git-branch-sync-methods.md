# Git Branch Sync Methods

In team development, we often encounter situations where branches fall behind. This article will systematically introduce Git branch synchronization solutions for different scenarios, helping you efficiently handle various version lag issues.

## Scenario Classification

Based on specific use cases, we categorize branch lag problems into the following types:

1. **Personal feature branch lagging behind main branch** - Most common situation
2. **Code committed but push rejected due to version lag** - Frequently encountered in team collaboration
3. **Sync while maintaining original commit structure** - Special requirement scenarios

## Scenario 1: Personal Feature Branch Lagging Behind Main Branch

### Applicable Situations

- You are developing on your own feature branch (e.g., `feature-xxx`)
- The main branch (`main` or `develop`) has new updates
- Need to sync main branch code to your feature branch

### Solutions

#### Solution 1: Use rebase (Recommended)

**Advantages**: Rewrites commit history into linear structure, facilitates code review

**Standard Process (Recommended)**

```bash
# 1. Fetch latest remote code
git fetch origin

# 2. Stay on your feature branch
git switch feature-xxx  # or: git checkout feature-xxx

# 3. Rebase main branch updates onto your branch
git rebase origin/main  # or: origin/develop

# 4. Push
# If this branch was previously pushed, after rebase rewrites history:
git push --force-with-lease origin feature-xxx
# If never pushed before, use:
# git push origin feature-xxx
```

**Quick Method**

Explanation: Directly rebase main branch onto feature branch, completing fetch+rebase in one step.

```bash
git pull --rebase origin main   # or: develop
# Push (same rules as above)
git push --force-with-lease origin feature-xxx
```

**Manual Stash Process (When uncommitted changes exist)**

```bash
git stash -u
git pull --rebase origin main   # or: develop
git stash pop
# If conflicts occur:
git add .
git rebase --continue
# Push (same rules as above)
git push --force-with-lease origin feature-xxx
```

**Notes**

- Using `--force-with-lease` on personal feature branches is generally acceptable, but avoid force pushing to shared/protected branches.

#### Solution 2: Use merge

**Advantages**: Simple operation, does not change commit history

**Standard Process**

```bash
# 1. Fetch latest remote code
git fetch origin

# 2. Stay on your feature branch
git switch feature-xxx  # or: git checkout feature-xxx

# 3. Merge main branch updates (preserves commit structure)
git merge origin/main   # or: origin/develop

# 4. Normal push
git push origin feature-xxx
```

**Quick Method**

```bash
git pull origin main    # or: develop
git push origin feature-xxx
```

**Manual Stash Process (When uncommitted changes exist)**

```bash
git stash -u
git pull origin main    # or: develop
git stash pop
# If conflicts occur:
git add .
git commit
git push origin feature-xxx
```

**Notes**

- Merge does not rewrite history, usually no force push needed.

## Scenario 2: Code Committed But Push Rejected Due to Version Lag

### Applicable Situations

- You have completed code commits locally
- Executing `git push` is rejected with version lag message
- This is the most common scenario in team collaboration

### Typical Error Message

```shell
To https://github.com/your-repo.git
 ! [rejected]        develop -> develop (non-fast-forward)
error: failed to push some refs to 'https://github.com/your-repo.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
```

### Solutions

#### Solution 1: Use rebase (Recommended)

**Suitable for**: Rewriting commit history into linear structure, suitable for code review

**Standard Process (Recommended)**

```bash
# 1. Fetch latest remote code (don't pull directly)
git fetch origin

# 2. Reapply your commits on top of remote latest code
git rebase origin/develop

# 3. If conflicts occur, resolve and continue
# Manually resolve conflict files, then:
git add .
git rebase --continue

# 4. Push
# If this branch was previously pushed, rebase rewrites history so force push needed:
# git push --force-with-lease origin develop
# If never pushed before, or no previously pushed commits before rebase, can push directly:
git push origin develop
```

**Quick Method (Recommended)**

Explanation: Handle fetch + rebase at once, automatically stash and restore when uncommitted changes exist.

```bash
git pull --rebase --autostash origin develop
# If previously pushed, force push needed:
git push --force-with-lease origin develop
# If never pushed, push directly:
# git push origin develop
```

**Manual Stash Process (Equivalent to quick method)**

```bash
git stash -u
git pull --rebase origin develop
git stash pop
# If conflicts occur:
git add .
git rebase --continue
# If previously pushed, force push needed:
git push --force-with-lease origin develop
# If never pushed, push directly:
# git push origin develop
```

**About Force Push**

In Scenario 2, if the branch was previously pushed, rebase will rewrite pushed commit history, requiring force push:

```bash
# Safer force push method
git push --force-with-lease origin develop
```

**Note**: If the branch was never pushed, or no commits pushed to remote before rebase, force push is not needed, just use `git push`.

#### Solution 2: Use merge

**Suitable for**: Simple operation, suitable for urgent situations or complex conflicts

**Standard Process**

```bash
# 1. Fetch and merge remote code
git fetch origin
git merge origin/develop

# 2. If conflicts occur, resolve and complete merge
# Manually resolve conflict files, then:
git add .
git commit

# 3. Normal push (no force push needed)
git push origin develop
```

**Quick Method**

```bash
# Default pull is merge (if pull.rebase not set)
git pull --no-rebase
git push origin develop
```

**Manual Stash Process (When uncommitted changes exist)**

```bash
git stash -u
git pull --no-rebase
git stash pop
# If conflicts occur:
git add .
git commit
git push origin develop
```

### Commit History Comparison

Assuming your local commits and others' commits have conflicts:

**History after rebase** (linear and clear):

```text
a1b2c3d (HEAD -> develop) your latest commit (rebased)
e4f5g6h your previous commit (rebased)
i7j8k9l (origin/develop) other's commit
m1n2o3p older commit
```

Explanation: Rebase will reapply your commits on top of remote latest commits, forming linear history.

**History after merge** (includes merge commit):

```text
a1b2c3d (HEAD -> develop) Merge branch 'develop' of origin into develop
e4f5g6h your previous commit
i7j8k9l (origin/develop) other's commit
m1n2o3p older commit
```

Explanation: Merge creates a merge commit, preserving original commit history structure.

## Scenario 3: Sync While Maintaining Original Commit Structure

### Applicable Situations

- Need to preserve original commit timestamps and structure
- Don't want to use rebase to change commit history
- Suitable for release branches or important milestone branches

### Solutions

#### Solution 1: Merge directly on target branch (Common)

**Standard Process (Recommended)**

```bash
git fetch origin
git switch develop  # or: git checkout develop
git merge --no-ff your-feature-branch
git push origin develop
```

**Manual Handling of Uncommitted Changes (When can't switch branches)**

```bash
# If current branch has uncommitted changes, stash or commit first
git stash -u        # or: commit first
git switch develop
git merge --no-ff your-feature-branch
git push origin develop

# After completion, can return to original branch and restore workspace
git switch your-feature-branch
git stash pop       # if used stash
```

**Notes**

- Avoid force push to protected branches.
- When team requires code review, prioritize merging via PR.
- Use `--no-ff` to preserve merge records and commit structure.

#### Solution 2: Via temporary branch + PR (Recommended for collaboration)

**Standard Process**

```bash
git fetch origin
git switch -c temp-sync origin/develop
git merge --no-ff your-feature-branch
git push origin temp-sync
# Then create PR on code hosting platform to merge into develop
```

**Notes**

- If current branch has uncommitted changes and can't switch, commit first or use `git stash -u`.
- Not recommended to directly use `git push origin temp-sync:develop`, may bypass branch protection and code review.

## Conflict Resolution Guide

Regardless of which sync method is used, conflicts may be encountered. Here are general conflict resolution steps:

### 1. Identify Conflicts

```bash
# Check conflict status
git status

# View conflicted files
git diff

# List only files with conflicts
git diff --name-only --diff-filter=U
```

### 2. Resolve Conflicts

Manually edit conflicted files, choose code to keep. Git marks conflict areas:

```text
<<<<<<< HEAD
your code
=======
other's code
>>>>>>> other-branch
```

### 3. Mark Conflicts Resolved

```bash
# Add resolved files
git add .

# Continue current operation
git rebase --continue    # if in rebase process
# or
git commit              # if in merge process
```

### 4. Cancel Operation (If needed)

```bash
git rebase --abort      # Cancel rebase
# or
git merge --abort       # Cancel merge
```

## Best Practice Recommendations

### 1. Preventive Measures

- **Frequent sync**: Sync remote branch before starting development each day
- **Small commits**: Avoid large, infrequent commits
- **Regular communication**: Coordinate development progress with team members

### 2. Choose Appropriate Sync Strategy

| Scenario                    | Recommended Method | Reason                                    |
| --------------------------- | ------------------ | ----------------------------------------- |
| Personal feature branch     | rebase             | Rewrite to linear history, easy to review |
| Public branch collaboration | merge              | Avoid force push, safer operation         |
| Emergency fix               | merge              | Quick operation, lower risk               |
| Code review preparation     | rebase             | Linear history easy to review             |

### 3. Safety Precautions

- **Don't casually use `git push -f` on public branches**
- **Use `git push --force-with-lease` instead of `-f`** (safer)
- **Confirm branch status before pushing**: `git status` and `git log`
- **Set protection rules for important branches**

### 4. Team Collaboration Standards

1. **Branch naming convention**: Use clear branch naming
2. **Commit message convention**: Clearly write commit purpose and content
3. **Regular branch cleanup**: Delete merged useless branches
4. **Code review process**: All pushes go through code review

## Advanced Tips

### 1. View Branch Status

```bash
# View differences between local and remote branches
git log --oneline --graph --decorate --all

# View specific branch differences
git log HEAD..origin/develop --oneline
```

### 2. Selective Sync

```bash
# Cherry-pick specific commit
git cherry-pick <commit-hash>

# Batch cherry-pick commits
git cherry-pick <start-commit>^..<end-commit>
```

### 3. Safe Force Push

```bash
# Safer force push, checks if remote has new commits
git push --force-with-lease origin develop
```

## Summary

Git branch synchronization is an essential skill in team development. Mastering handling methods for different scenarios enables more efficient collaborative development:

1. **Use rebase for personal development**: Rewrite commit history into linear structure, easy to review
2. **Use force push cautiously in team collaboration**: Avoid affecting other developers
3. **Stay calm when conflicts occur**: Resolve step by step
4. **Develop good Git habits**: Frequent sync, small commits, timely communication

Remember, the best solution is prevention. Developing good development habits can minimize branch conflicts.

---

::: tip
This article comprehensively covers various Git branch synchronization scenarios and solutions. In practical application, please choose appropriate methods based on team standards and specific project requirements.
:::
