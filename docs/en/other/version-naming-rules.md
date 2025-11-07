# Software Version Naming Rules

## Version Naming

### Version Stages

1. `Alpha` version: This version indicates that the software at this stage is primarily focused on implementing software functionality, usually only for internal communication among software developers. Generally, this version of the software has many `Bug`s and requires continued modification.

2. `Beta` version: This version has made significant improvements compared to the `Alpha` version, eliminating serious errors, but there are still some defects that need to be further eliminated through multiple rounds of testing.

3. `RC` version: Stands for `Release Candidate`. This version is quite mature, with basically no `BUG`s that cause errors, and is almost identical to the upcoming official release.

4. `Release` version: This version means "final version." After a series of test versions, there will eventually be an official version, which is the final version delivered to users. This version is sometimes also called the standard version. Generally, `Release` does not appear as a word on software covers; instead, it is replaced by the symbol `(R)`.

### Naming Conventions

1. Software version numbers consist of four parts:

   - Major version number

   - Minor version number

   - Revision version number

   - Date version number plus Greek letter version number

2. There are `5` types of Greek letter version numbers: `base`, `alpha`, `beta`, `RC`, and `release`. For example: **1.1.1.051021_beta**

3. Typically, a complete version number definition consists of three items: the major version number, the minor version number, and the revision version number, such as: **1.0.0**

### Modification Rules

1. Major version number: When there are significant changes to functional modules, such as adding multiple modules or overall architectural changes.

2. Minor version number: When there are certain additions or changes to functionality, such as adding permission control or custom views.

3. Revision version number: Generally for `Bug` fixes or minor changes. Revision versions need to be released frequently, with no time interval restrictions.

4. Date version number: Used to record the date when the project was modified.

5. Greek letter version number: This version number is used to indicate which development stage the current version of the software is in. This version number needs to be modified when the software enters another stage.

## File Naming

### File Naming Conventions

1. File names consist of four parts:

   - First part: project name

   - Second part: file description

   - Third part: current software version number

   - Fourth part: file stage identifier plus file extension

2. If the same file in the same version and stage has been modified twice or more, add a numeric identifier after the stage identifier, incrementing the number by 1 with each modification. For example: **Project Outsourcing Platform Test Report 1.1.1.051021_beta_d1.xls**

3. When multiple people submit the same file simultaneously, you can add a person's name or abbreviation after the stage identifier to distinguish them. For example: **Project Outsourcing Platform Test Report 1.1.1.051021_beta_d_ZhaiYuXin.xls**

4. When this file is submitted again, you can add a sequence number after the person's name or abbreviation to distinguish it. For example: **Project Outsourcing Platform Test Report 1.1.1.051021_beta_d_ZhaiYuXin2.xls**

## Stage Identifiers

Each version of the software includes `11` stages, as shown below:

| Stage Name                | Stage Identifier |
| :------------------------ | :--------------- |
| Requirements Control      | `a`              |
| Design Phase              | `b`              |
| Coding Phase              | `c`              |
| Unit Testing              | `d`              |
| Unit Test Revision        | `e`              |
| Integration Testing       | `f`              |
| Integration Test Revision | `g`              |
| System Testing            | `h`              |
| System Test Revision      | `i`              |
| Acceptance Testing        | `j`              |
| Acceptance Test Revision  | `k`              |

Article republished / referenced from: [Software Version Number Standards and Naming Principles](https://www.cnblogs.com/scottx/p/5463447.html), [Semantic Versioning](https://semver.org/lang/zh-CN/)
