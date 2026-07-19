import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: "ELLA'S 1DAY WORKSHOP",
  description: "나만의 커리어 코치 — 내 지식을 학습한 분신 에이전트를 4시간 만에 만드는 워크숍",
  base: '/heyjoyce-nari-1day-workshop/',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Part 1', link: '/part1/1-1-intro' },
      { text: 'Part 2', link: '/part2/2-1-ingest' },
      { text: 'Part 3', link: '/part3/3-1-answer' },
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
        text: 'Part 1 — 코치 정체성',
        items: [
          { text: '1-1. 커리어 코치 에이전트란', link: '/part1/1-1-intro' },
          { text: '1-2. 작업실 재점검 + 안전 약속', link: '/part1/1-2-reactivate' },
          { text: '1-3. 코치 작명 + 첫 만남', link: '/part1/1-3-naming' },
          { text: '1-4. 코치의 매뉴얼 초안', link: '/part1/1-4-persona-draft' },
        ]
      },
      {
        text: 'Part 2 — 지식 베이스 구축',
        items: [
          { text: '2-0. 빌린 지식으로 먼저 성공하기', link: '/part2/2-0-seed-preview' },
          { text: '2-1. 내 자료 불러오기 (인제스트)', link: '/part2/2-1-ingest' },
          { text: '2-2. 내 지식 구조화하기', link: '/part2/2-2-structure' },
          { text: '2-3. 코치의 첫 그라운딩 답변', link: '/part2/2-3-first-answer' },
          { text: '2-4. 개인정보 익명화 · 로컬 보관', link: '/part2/2-4-privacy' },
        ]
      },
      {
        text: 'Part 3 — 3모드 완성 · 일상화',
        items: [
          { text: '3-1. 대리응답 완성 (/answer)', link: '/part3/3-1-answer' },
          { text: '3-2. 토론 파트너 (/spar)', link: '/part3/3-2-spar' },
          { text: '3-3. 리서치 대행 (/research)', link: '/part3/3-3-research' },
          { text: '3-4. 근거 검수 붙이기', link: '/part3/3-4-grounding-check' },
          { text: '3-5. 일상화 습관 + 마무리', link: '/part3/3-5-handoff' },
        ]
      },
      {
        text: '부록',
        items: [
          { text: '자료 인제스트 · 개인정보 · MCP 확장 레시피', link: '/appendix' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Celine96/heyjoyce-nari-1day-workshop' }
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
