<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/zhaiyuxin103.png',
    name: '翟宇鑫',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/zhaiyuxin103' },
      { icon: 'twitter', link: 'https://twitter.com/zhaiyuxin103' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members"></VPTeamMembers>
