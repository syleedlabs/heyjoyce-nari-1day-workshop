import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: "ELLA'S 1DAY WORKSHOP",
  description: "나만의 커리어 코치 — 내 자료를 학습한 분신 에이전트를 4시간 만에 만드는 워크숍",
  base: '/heyjoyce-nari-1day-workshop/',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Part 1', link: '/part1/1-1-intro' },
      { text: 'Part 2', link: '/part2/2-1-agents' },
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
        text: 'Part 1 — 기초 다지기',
        items: [
          { text: '1-1. 클로드 코드란?', link: '/part1/1-1-intro' },
          { text: '1-2. 명령어 & 네비게이션', link: '/part1/1-2-commands' },
          { text: '1-3. 클로드 코드 자동화, 어디까지?', link: '/part1/1-3-showcase' },
          { text: '1-4. 자동화 맛보기 : 코치 만들기', link: '/part1/1-4-agent' },
        ]
      },
      {
        text: 'Part 2 — 고급 활용',
        items: [
          { text: '2-1. 에이전트 개념', link: '/part2/2-1-agents' },
          { text: '2-2. PRD (제품 요구사항 문서)', link: '/part2/2-2-prd' },
          { text: '2-3. 하네스 엔지니어링', link: '/part2/2-3-harness' },
          { text: '2-4. 나만의 커리어 코치 만들기', link: '/part2/2-4-build' },
          { text: '2-5. 실무 팁', link: '/part2/2-5-tips' },
        ]
      },
      {
        text: '부록',
        items: [
          { text: '자료 인제스트 · md 파일들 · 다음 단계', link: '/appendix' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/syleedlabs/heyjoyce-nari-1day-workshop' }
    ],
    outline: { level: [2, 3], label: '목차' },
    search: { provider: 'local' },
    docFooter: { prev: '이전', next: '다음' }
  }
})
