export const translations = {
  zh: {
    // Navigation
    nav: {
      home: "首页",
      about: "关于论坛",
      agenda: "议程安排",
      speakers: "参会者",
    },
    // Home page
    home: {
      title: "人工智能愿景论坛",
      description: "探索AI和人类的共生未来",
      englishDescription: "Exploring a Symbiotic Future of AI and Humanity",
      tagline: "科技向善 · 价值共生",
      englishTagline: "AI for Good · Co-Creating Value",
      eventDetails: {
        date: "日期:",
        dateValue: "2025年9月12日（星期五）",
        location: "地点:",
        locationValue: "中国·杭州",
        scale: "规模:",
        scaleValue: "70-100人邀请制",
      },
      introduction: {
        title: "论坛简介",
        p1: "GOSIM 作为全球开源创新平台，联合全法中国青年科创办会共同发起本次人工智能愿景论坛，聚焦「当AI重塑人类角色，如何确保人类核心价值在 AI 时代始终居于首位?」这一关键命题，为思想者、实践者、政策制定者和用户提供一个深度对话空间。",
        p2: "论坛采用邀请制、非公开、小规模的深度交互机制，汇聚全球顶尖高校、研究机构及企业代表，尤为关注人工智能在人类体验维度的正向价值，聚焦教育革新、文化创造、情感陪伴、技术平权等关键领域。",
      },
      themes: {
        title: "核心议题",
        education: {
          title: "AI 4 Education",
          description: "探讨生成式AI如何重构学习体验，培养学生在艺术、文学、设计等领域的创作能力，推动教育公平与知识民主化，让创意表达成为新一代学生的核心技能",
        },
        emotion: {
          title: "AI与情感关系重构",
          description: "探索AI在老龄陪伴、心理健康、儿童互动中的情感支持",
        },
        symbiosis: {
          title: "从「AI工具」到「AI共生」",
          description: "超越效率叙事，转向「共创—互补」的协作范式",
        },
        ethics: {
          title: "伦理悖论与治理难题",
          description: "深度讨论「科技向善」在现实中的制度张力",
        },
      },
    },
    // About page
    about: {
      title: "关于论坛",
      subtitle: "探索AI和人类的共生未来",
    },
    // Agenda page
    agenda: {
      title: "议程安排（活动已结束，感谢参与）",
      subtitle: "2025年9月12日（星期五）· 中国·杭州",
    },
    // Speakers page
    speakers: {
      title: "参会者（活动已结束，感谢参与）",
      subtitle: "汇聚全球顶尖高校、研究机构及企业代表",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      agenda: "Agenda",
      speakers: "Participants",
    },
    // Home page
    home: {
      title: "AI Vision Forum 2025 (The event has ended, thanks for attending)",
      subtitle: "Artificial Intelligence Vision Forum",
      description: "Exploring a Symbiotic Future of AI and Humanity",
      englishDescription: "探索AI和人类的共生未来",
      tagline: "AI for Good · Co-Creating Value",
      englishTagline: "科技向善 · 价值共生",
      eventDetails: {
        date: "Date:",
        dateValue: "September 12, 2025 (Friday)",
        location: "Location:",
        locationValue: "Hangzhou, China",
        scale: "Scale:",
        scaleValue: "70-100 Participants (Invitation Only)",
      },
      introduction: {
        title: "Forum Introduction",
        p1: "GOSIM and AJTIS launch this Vision Forum to answer one critical question: As AI reshapes human roles, how do we ensure human core values remain central in the AI era?",
        p2: "An invitation-only gathering of global thought leaders, researchers, and innovators. We focus on AI's human impact: education, creativity, emotional support, and technological equity.",
      },
      themes: {
        title: "Core Themes",
        education: {
          title: "AI 4 Education",
          description: "Transforming learning through generative AI. Democratizing creativity in art, literature, and design. Making creative expression the new literacy.",
        },
        emotion: {
          title: "AI & Emotional Bonds",
          description: "Redefining connection through AI companionship, mental wellness, and empathetic interaction.",
        },
        symbiosis: {
          title: "From Tools to Symbiosis",
          description: "Beyond efficiency. Toward true co-creation and complementary intelligence.",
        },
        ethics: {
          title: "Ethics & Governance",
          description: "Navigating the tensions between 'technology for good' and real-world implementation.",
        },
      },
    },
    // About page
    about: {
      title: "About the Forum",
      subtitle: "Exploring a Symbiotic Future of AI and Humanity",
    },
    // Agenda page
    agenda: {
      title: "Forum Agenda (The event has ended, thanks for attending)",
      subtitle: "September 12, 2025 (Friday) · Hangzhou, China",
    },
    // Speakers page
    speakers: {
      title: "Participants (The event has ended, thanks for attending)",
      subtitle:
        "Bringing together representatives from top global universities, research institutions and enterprises",
    },
  },
};

export function t(key, locale = "zh") {
  const keys = key.split(".");
  let value = translations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
