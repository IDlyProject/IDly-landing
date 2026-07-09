import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import "./App.css";

const logoMain =
  "https://www.figma.com/api/mcp/asset/2a9402fb-cba3-4f51-bb2e-2e0e7cfce526";
const heroBg =
  "https://www.figma.com/api/mcp/asset/beb0cfc9-b732-4b7d-895a-d284b6354b1e";
const heroBadge =
  "https://www.figma.com/api/mcp/asset/eac8d88b-eedf-4488-beaa-d5af91805900";
const logoSecondary =
  "https://www.figma.com/api/mcp/asset/4408a0f2-e727-4749-a167-c5788f560dc7";
const phoneMockup = "/main.gif";
const tiltedCardTop =
  "https://www.figma.com/api/mcp/asset/948bbf51-1bc8-42c1-b619-707f9c8dd7a9";
const tiltedCardBottom =
  "https://www.figma.com/api/mcp/asset/c0db9702-05ff-4433-ac4c-e7ddea590860";
const protectedMockup = "/div.png";

const features = [
  {
    icon: "🔍",
    title: "자동 계정 탐지",
    description: "계정 보안 메일 분석으로 연결된 서비스를 자동으로 찾아요",
  },
  {
    icon: "⚠️",
    title: "보안 위험 알림",
    description: "오래되거나 취약한 계정을 미리 알려드려요",
  },
  {
    icon: "🧹",
    title: "원클릭 정리",
    description: "안 쓰는 계정을 한 번에 모아 확인해요",
  },
];

function App() {
  const [isPromoVisible, setIsPromoVisible] = useState(true);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitToastVisible, setIsSubmitToastVisible] = useState(false);
  const submitToastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setIsPromoVisible(false);
    }, 5000);

    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!isApplyModalOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsApplyModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isApplyModalOpen]);

  useEffect(() => {
    return () => {
      if (submitToastTimerRef.current !== null) {
        window.clearTimeout(submitToastTimerRef.current);
      }
    };
  }, []);

  const showSubmitToast = () => {
    setIsPromoVisible(false);
    setIsSubmitToastVisible(true);

    if (submitToastTimerRef.current !== null) {
      window.clearTimeout(submitToastTimerRef.current);
    }

    submitToastTimerRef.current = window.setTimeout(() => {
      setIsSubmitToastVisible(false);
      submitToastTimerRef.current = null;
    }, 3000);
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

    try {
      await fetch(`${import.meta.env.VITE_API_URL ?? ""}/api/beta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });
    } catch {
      // 네트워크 오류 시에도 UX는 그대로 유지
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsApplyModalOpen(false);
    showSubmitToast();
  };

  return (
    <div className="landing-shell">
      <div
        className={`promo-modal ${isPromoVisible ? "is-visible" : "is-hidden"}`}
        role="status"
        aria-live="polite"
      >
        100명 한정 선착순 초기 베타 모집
      </div>

      <div
        className={`promo-modal success-toast ${
          isSubmitToastVisible ? "is-visible" : "is-hidden"
        }`}
        role="status"
        aria-live="polite"
      >
        신청이 완료되었습니다
        <span className="success-toast-subtext">
          입력하신 연락처로 서비스 링크를 보내드릴게요
        </span>
      </div>

      <header className="topbar">
        <img src={logoMain} alt="IDly" className="logo" />
        <button
          type="button"
          className="pill-button small"
          onClick={() => setIsApplyModalOpen(true)}
        >
          베타 테스터 신청
        </button>
      </header>

      <section className="hero">
        <img className="hero-grid" src={heroBg} alt="" />
        <img className="hero-badge" src={heroBadge} alt="" />

        <div className="hero-headline">
          <div className="hero-chip-spacer" aria-hidden="true" />
          <img src={logoSecondary} alt="IDly 로고" className="hero-logo" />
          <p>Gmail 하나로 찾는 나의 모든 계정</p>
        </div>

        <img src={phoneMockup} alt="IDly 앱 미리보기" className="hero-phone" />
        <span className="hero-ring" aria-hidden="true" />
      </section>

      <section className="service">
        <p className="section-kicker">OUR SERVICE</p>
        <h2>
          IDly와 함께 흩어진
          <br />내 계정을 정리해볼까요?
        </h2>
        <p className="section-copy">
          Gmail 연동만으로 수신된 계정 보안 메일을 분석해
          <br />
          연결된 서비스와 계정을 자동으로 찾아드려요
        </p>
        <button
          type="button"
          className="pill-button"
          onClick={() => setIsApplyModalOpen(true)}
        >
          베타 테스터 신청하기
        </button>

        <div className="service-cards" aria-hidden="true">
          <img src={logoSecondary} alt="" className="floating-logo" />
          <img src={tiltedCardTop} alt="" className="card card-top" />
          <img src={tiltedCardBottom} alt="" className="card card-bottom" />
        </div>
      </section>

      <section className="protected">
        <p className="section-kicker">STAY PROTECTED</p>
        <h2>
          지나치기 쉬운 보안 메일,
          <br />
          IDly가 먼저 확인해요
        </h2>
        <p className="section-copy dim">
          쌓여있는 메일함 속 낯선 기기 로그인, 비밀번호 재설정 요청처럼
          <br />
          눈에 띄지 않는 보안 경고를 자동으로 찾아 알려드려요
        </p>
        <img
          src={protectedMockup}
          alt="보안 알림 예시"
          className="protected-image"
        />
      </section>

      <section className="features">
        <p className="section-kicker">CORE FEATURES</p>
        <h2>핵심 기능</h2>

        <ul className="feature-list">
          {features.map((feature) => (
            <li key={feature.title}>
              <div className="icon-box">{feature.icon}</div>
              <div>
                <p className="feature-title">{feature.title}</p>
                <p className="feature-description">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta">
        <p className="section-kicker cta-kicker">
          100명 한정 선착순 초기 베타 모집
        </p>
        <h2>
          지금 베타 테스터로
          <br />
          먼저 만나보세요
        </h2>
        <p className="cta-copy">
          신청 내용을 확인한 뒤 서비스 링크를 보내드릴게요
        </p>

        <form className="cta-form" onSubmit={handleFormSubmit}>
          <label>
            <span className="sr-only">이메일</span>
            <input
              name="email"
              type="email"
              placeholder="이메일 주소를 입력하세요"
              required
            />
          </label>
          <label>
            <span className="sr-only">전화번호</span>
            <input
              name="phone"
              type="tel"
              placeholder="전화번호를 입력하세요"
              required
            />
          </label>
          <button type="submit" className="submit">
            베타 테스터 신청하기
          </button>
        </form>
      </section>

      {isApplyModalOpen && (
        <div
          className="apply-modal-overlay"
          onClick={() => setIsApplyModalOpen(false)}
          role="presentation"
        >
          <div
            className="apply-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="apply-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={logoMain} alt="IDly" className="apply-modal-logo" />

            <button
              type="button"
              className="apply-modal-close"
              aria-label="모달 닫기"
              onClick={() => setIsApplyModalOpen(false)}
            >
              ×
            </button>

            <h3 id="apply-modal-title">베타 테스터 신청</h3>
            <p className="apply-modal-copy">
              이메일과 전화번호를 남겨주시면
              <br />
              서비스 링크를 보내드릴게요
            </p>

            <form className="apply-modal-form" onSubmit={handleFormSubmit}>
              <label>
                <span className="sr-only">이메일</span>
                <input
                  name="email"
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  required
                />
              </label>
              <label>
                <span className="sr-only">전화번호</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="전화번호를 입력하세요"
                  required
                />
              </label>
              <button type="submit">베타 테스터 신청하기</button>
            </form>
          </div>
        </div>
      )}

      <footer className="landing-footer">
        <div className="footer-brand-row">
          <img src={logoMain} alt="IDly" className="footer-logo" />
        </div>

        <address className="footer-company" aria-label="회사 정보">
          <p>아이들리 | Founder: 이현진</p>
          <p>
            Contact:{" "}
            <a
              href="https://www.linkedin.com/in/%EC%9D%B4%ED%98%84%EC%A7%84-%E2%80%8E-188b73386/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn (대표자)
            </a>
            {" | idly1apt@gmail.com"}
          </p>
        </address>

        <p className="footer-copy">© 2026 계정아파트. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
