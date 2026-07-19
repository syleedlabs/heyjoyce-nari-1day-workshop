import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: "ELLA'S 1DAY WORKSHOP",
  description: "나만의 커리어 코치 — 내 지식을 학습한 분신 에이전트를 4시간 만에 만드는 워크숍",
  base: '/heyjoyce-nari-1day-workshop/',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'ch1', link: '/part1/1-1-intro' },
      { text: 'ch2', link: '/part2/2-1-agents' },
      { text: '부록', link: '/appendix' },
    ],
    sidebar: [
      {
        text: '시작',
        items: [
          { text: '워크북 소개', link: '/' },
          { text: '강사 소개 — 이수연 (Ella)', link: '/part1/0-host' },
          { text: '0. 프롤로그 : 내 지식이 말을 한다면', link: '/prologue' },
        ]
      },
      {
        text: 'ch1 — 기초 + 완성 코치 맛보기',
        items: [
          { text: '1-1. 커리어 코치 에이전트란', link: '/part1/1-1-intro' },
          { text: '1-2. 작업실 재점검 + 안전 약속', link: '/part1/1-2-reactivate' },
          { text: '1-3. 명령어 & 코치 작명', link: '/part1/1-3-naming' },
          { text: '1-4. 완성 코치 맛보기 (시드로 첫 성공)', link: '/part1/1-4-taste' },
        ]
      },
      {
        text: 'ch2 — 개념 + 나만의 코치 만들기',
        items: [
          { text: '2-1. 에이전트 개념', link: '/part2/2-1-agents' },
          { text: '2-2. PRD (제품 요구사항 문서)', link: '/part2/2-2-prd' },
          { text: '2-3. 하네스 엔지니어링', link: '/part2/2-3-harness' },
          { text: '2-4. 나만의 코치 만들기', link: '/part2/2-4-build' },
          { text: '2-5. 3모드 완성 + 근거 검수', link: '/part2/2-5-modes' },
          { text: '2-6. 실무 팁 + 일상화', link: '/part2/2-6-tips' },
        ]
      },
      {
        text: '부록',
        items: [
          { text: '자료 인제스트 · 개인정보 · MCP · md 하이어라키', link: '/appendix' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/syleedlabs/heyjoyce-nari-1day-workshop' }
    ],
    outline: {
      level: [2, 3],
      label: '목차'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '이전',
      next: '다음'
    }
  }
})
