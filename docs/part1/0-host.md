<style>
.host{
  --h-surface:#FFFFFF; --h-surface2:#FBFBFC;
  --h-navy:#1E3A5F; --h-navy2:#2E5586; --h-accent:#E8623A;
  --h-ink:#232833; --h-muted:#6E7686; --h-faint:#9AA3B2; --h-line:#E4E8EE;
  --h-shadow:0 1px 2px rgba(20,40,63,.04), 0 8px 24px rgba(20,40,63,.06);
  color:var(--h-ink); line-height:1.6; margin:6px 0 8px;
  font-family:"Pretendard","Apple SD Gothic Neo","Noto Sans KR",var(--vp-font-family-base,system-ui),sans-serif;
}
html.dark .host{
  --h-surface:#171C25; --h-surface2:#141922;
  --h-navy:#8FB2DE; --h-navy2:#A7C4E8; --h-accent:#F2794F;
  --h-ink:#E6E9EF; --h-muted:#9AA3B2; --h-faint:#6E7686; --h-line:#28303B;
  --h-shadow:0 1px 2px rgba(0,0,0,.3), 0 10px 30px rgba(0,0,0,.35);
}
.host *{box-sizing:border-box}
.host ul{list-style:none;margin:0;padding:0}
.host li{margin:0}
.host section{margin:0}
.host a{text-decoration:none;font-weight:inherit}
.host a::after{display:none!important}

.host .eyebrow{display:flex;align-items:baseline;gap:12px;margin-bottom:18px}
.host .eyebrow .lab{display:flex;flex-direction:column}
.host .eyebrow b{color:var(--h-navy);font-size:1rem;font-weight:800}
.host .eyebrow .bar{width:34px;height:3px;background:var(--h-accent);border-radius:2px;margin-top:7px}
.host .eyebrow .tag{color:var(--h-accent);font-size:.64rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase}

.host .head{display:flex;flex-direction:column;align-items:flex-start;padding-bottom:20px;border-bottom:2px solid var(--h-line);margin-bottom:26px}
.host .head .name{font-size:2rem;font-weight:800;letter-spacing:-.01em;line-height:1.05;margin:0;color:var(--h-ink);border:none;padding:0}
.host .head .role{color:var(--h-accent);font-weight:800;font-size:1rem;margin-top:6px}
.host .head .role-sub{color:var(--h-muted);font-size:.85rem;margin-top:1px}
.host .head .brand{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-top:16px}
.host .head .brand .word{font-size:1.15rem;font-weight:800;letter-spacing:.02em;color:var(--h-navy)}
.host .head .brand .word .dot{color:var(--h-accent)}
.host .head .brand .btag{color:var(--h-muted);font-size:.75rem}
.host .contact{display:flex;flex-direction:column;gap:6px;align-items:flex-start;margin-top:12px}
.host .contact a{display:flex;align-items:center;gap:8px;color:var(--h-muted);font-size:.82rem;transition:color .15s}
.host .contact a:hover{color:var(--h-accent)}
.host .contact .ic{width:19px;height:19px;flex:none;display:grid;place-items:center;border-radius:6px;background:var(--h-surface2);border:1px solid var(--h-line);color:var(--h-navy);font-size:.66rem;font-weight:700}

.host .grid2{display:grid;grid-template-columns:1.1fr 1fr;gap:34px;align-items:start}
.host .col{display:flex;flex-direction:column;gap:24px}
.host .sec-h{display:flex;align-items:center;gap:9px;margin-bottom:12px}
.host .sec-h .ico{font-size:.95rem}
.host .sec-h h3{font-size:1.02rem;font-weight:800;color:var(--h-navy);margin:0;position:relative;padding:0 0 8px;border:none}
.host .sec-h h3::after{content:"";position:absolute;left:0;bottom:0;width:26px;height:3px;background:var(--h-accent);border-radius:2px}
.host .sec-h .note{color:var(--h-faint);font-size:.71rem;font-weight:600}

.host .lect{display:flex;flex-direction:column;gap:11px}
.host .lect li{display:flex;flex-direction:column;gap:1px}
.host .lect .org{font-weight:700;color:var(--h-ink);font-size:.9rem}
.host .lect .course{color:var(--h-muted);font-size:.82rem}

.host .tl{display:flex;flex-direction:column}
.host .tl li{display:grid;grid-template-columns:92px 1fr;gap:10px;padding:9px 0;border-top:1px solid var(--h-line)}
.host .tl li:first-child{border-top:none}
.host .tl .yr{color:var(--h-accent);font-weight:700;font-size:.77rem;font-variant-numeric:tabular-nums;padding-top:1px}
.host .tl .who b{display:block;color:var(--h-ink);font-weight:700;font-size:.87rem}
.host .tl .who span{color:var(--h-muted);font-size:.79rem}

.host .edu{display:flex;flex-direction:column;gap:10px}
.host .edu b{display:block;color:var(--h-ink);font-weight:700;font-size:.9rem}
.host .edu span{color:var(--h-muted);font-size:.79rem}

.host .awards{display:flex;flex-direction:column;gap:12px}
.host .award{background:var(--h-surface);border:1px solid var(--h-line);border-radius:14px;padding:13px 15px;box-shadow:var(--h-shadow)}
.host .award .top{display:flex;align-items:center;gap:8px;margin-bottom:4px}
.host .award .yr{color:var(--h-accent);font-weight:800;font-size:.81rem;font-variant-numeric:tabular-nums}
.host .award .ttl{font-weight:800;color:var(--h-ink);font-size:.86rem}
.host .award .org{color:var(--h-faint);font-size:.71rem;margin-bottom:7px}
.host .award .proj{color:var(--h-ink);font-size:.82rem;line-height:1.5}
.host .award .proj b{color:var(--h-navy2);font-weight:700}
.host .award .tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.host .award .tag{font-size:.65rem;color:var(--h-muted);background:var(--h-surface2);border:1px solid var(--h-line);border-radius:20px;padding:2px 9px}

@media (max-width:640px){
  .host .head{flex-direction:column;align-items:flex-start;gap:16px}
  .host .head-right{text-align:left;align-items:flex-start}
  .host .contact{align-items:flex-start}
  .host .grid2{grid-template-columns:1fr;gap:28px}
}
@media (prefers-reduced-motion: reduce){.host *{transition:none!important}}
</style>

<div class="host">
<div class="eyebrow"><div class="lab"><b>강사 소개</b><span class="bar"></span></div><span class="tag">INSTRUCTOR</span></div>
<header class="head">
<h1 class="name">이수연</h1><div class="role">디랩스(D.LABS) 대표</div><div class="role-sub">AX 바이브코딩 교육 · 컨설팅</div>
<div class="brand"><span class="word">D.LABS<span class="dot">.</span></span><span class="btag">Define · Design · Delegate</span></div>
<div class="contact"><a href="mailto:team.d.labs@gmail.com"><span class="ic">✉</span>team.d.labs@gmail.com</a><a href="https://linkedin.com/in/syceline" target="_blank" rel="noreferrer"><span class="ic">in</span>linkedin.com/in/syceline</a></div>
</header>
<div class="grid2">
<div class="col">
<section>
<div class="sec-h"><span class="ico">📚</span><h3>강의 이력</h3><span class="note">출강</span></div>
<ul class="lect">
<li><span class="org">삼성 E&amp;A</span><span class="course">AI 기초·실습 과정 — 에이전트 생성 · 하네스 엔지니어링</span></li>
<li><span class="org">코람코 자산운용</span><span class="course">업무혁신을 위한 AI 실무 활용 (전사 대상)</span></li>
<li><span class="org">파크시스템스</span><span class="course">전사 AX 바이브코딩 연수 · with Claude Code</span></li>
<li><span class="org">군산대학교</span><span class="course">「신뢰할 수 있는 인공지능」 비교과 (3일 과정)</span></li>
<li><span class="org">모두의연구소</span><span class="course">코칭스터디 · Data Science 코딩 코치</span></li>
</ul>
</section>
<section>
<div class="sec-h"><span class="ico">🏢</span><h3>커리어 타임라인</h3><span class="note">소속 이력</span></div>
<ul class="tl">
<li><span class="yr">2026.05~</span><span class="who"><b>디랩스(D.LABS)</b><span>대표</span></span></li>
<li><span class="yr">2025~26.06</span><span class="who"><b>서안개발 · 부동산컨설팅팀</b><span>AI Technical PM (AX)</span></span></li>
<li><span class="yr">2024</span><span class="who"><b>씽크포비엘 TRAI연구팀 · 리팩토웍스</b><span>CCEO</span></span></li>
<li><span class="yr">2023</span><span class="who"><b>모두의연구소 · 코칭스터디</b><span>코치</span></span></li>
<li><span class="yr">2020~22</span><span class="who"><b>롯데멤버스 · 데이터애널리틱스팀</b><span>DA</span></span></li>
</ul>
</section>
</div>
<div class="col">
<section>
<div class="sec-h"><span class="ico">🎓</span><h3>학력</h3></div>
<ul class="edu">
<li><b>연세대학교 공학대학원</b><span>인공지능공학부 석사</span></li>
<li><b>고려대학교</b><span>응용통계학 학사</span></li>
</ul>
</section>
<section>
<div class="sec-h"><span class="ico">🏆</span><h3>수상</h3></div>
<div class="awards">
<div class="award"><div class="top"><span class="yr">2024</span><span class="ttl">AI Showcase 발표 우수상</span></div><div class="org">연세대 공학대학원</div><div class="proj"><b>Music Diary</b> — 텍스트의 감정을 인식해 배경음악·이미지·음성을 자동 생성하는 감성 표현 서비스</div><div class="tags"><span class="tag">MusicGen</span><span class="tag">Stable Diffusion</span><span class="tag">TTS</span></div></div>
<div class="award"><div class="top"><span class="yr">2022</span><span class="ttl">AI Showcase 발표 우수상</span></div><div class="org">연세대 공학대학원</div><div class="proj"><b>Meta AI ART Gallery</b> — DALL·E·NeRF로 개인화 아트워크를 생성해 메타버스 환경에 전시하는 플랫폼</div><div class="tags"><span class="tag">Unity</span><span class="tag">NeRF</span><span class="tag">전송 프로토콜</span></div></div>
</div>
</section>
</div>
</div>
</div>

이제 시작해볼까요? → [Part 1 — 클로드 코드란?](/part1/1-1-intro)
