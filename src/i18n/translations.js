export const translations = {
	zh: {
		// Navigation
		nav: {
			home: "首页",
			about: "关于论坛", 
			agenda: "议程安排",
			speakers: "参会者"
		},
		// Home page
		home: {
			title: "AI Vision Forum 2025",
			subtitle: "人工智能愿景论坛",
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
				scaleValue: "70-100人邀请制"
			},
			introduction: {
				title: "论坛简介",
				p1: "GOSIM 作为全球开源创新平台，联合中法人工智能协会共同发起本次人工智能愿景论坛，聚焦「AI 能为人类创造何种核心价值」这一关键命题，为思想者、实践者、政策制定者和用户提供一个深度对话空间。",
				p2: "论坛采用邀请制、非公开、小规模的深度交互机制，汇聚全球顶尖高校、研究机构及企业代表，尤为关注人工智能在人类体验维度的正向价值，聚焦教育革新、文化创造、情感陪伴、技术平权等关键领域。"
			},
			themes: {
				title: "核心议题",
				education: {
					title: "AI教育革新",
					description: "探讨生成式AI如何重构学习体验、推动教育公平与知识民主化"
				},
				aigc: {
					title: "AIGC与文化创造力",
					description: "聚焦AI在艺术、文学、设计等领域的创作潜力"
				},
				emotion: {
					title: "AI与情感关系重构",
					description: "探索AI在老龄陪伴、心理健康、儿童互动中的情感支持"
				},
				symbiosis: {
					title: "从「AI工具」到「AI共生」",
					description: "超越效率叙事，转向「共创—互补」的协作范式"
				},
				ethics: {
					title: "伦理悖论与治理难题",
					description: "深度讨论「科技向善」在现实中的制度张力"
				}
			}
		},
		// About page
		about: {
			title: "关于论坛",
			subtitle: "探索AI和人类的共生未来"
		},
		// Agenda page  
		agenda: {
			title: "议程安排",
			subtitle: "2025年9月12日（星期五）· 中国·杭州"
		},
		// Speakers page
		speakers: {
			title: "参会者", 
			subtitle: "汇聚全球顶尖高校、研究机构及企业代表"
		}
	},
	en: {
		// Navigation
		nav: {
			home: "Home",
			about: "About", 
			agenda: "Agenda",
			speakers: "Participants"
		},
		// Home page
		home: {
			title: "AI Vision Forum 2025",
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
				scaleValue: "70-100 Participants (Invitation Only)"
			},
			introduction: {
				title: "Forum Introduction",
				p1: "As a global open source innovation platform, GOSIM, together with the Sino-French Artificial Intelligence Association, jointly launches this AI Vision Forum, focusing on the key proposition of 'what core value can AI create for humanity', providing a deep dialogue space for thinkers, practitioners, policy makers and users.",
				p2: "The forum adopts an invitation-only, non-public, small-scale deep interaction mechanism, bringing together representatives from top universities, research institutions and enterprises worldwide, with particular attention to the positive value of artificial intelligence in the human experience dimension, focusing on key areas such as educational innovation, cultural creation, emotional companionship, and technological equity."
			},
			themes: {
				title: "Core Themes",
				education: {
					title: "AI for Education",
					description: "Exploring how generative AI reshapes learning experiences and promotes educational equity and knowledge democratization"
				},
				aigc: {
					title: "AIGC and Cultural Creativity",
					description: "Focusing on AI's creative potential in art, literature, design and other fields"
				},
				emotion: {
					title: "AI and Emotional Relationship Reconstruction",
					description: "Exploring AI's emotional support in elderly companionship, mental health, and child interaction"
				},
				symbiosis: {
					title: "From 'AI Tools' to 'AI Symbiosis'",
					description: "Beyond efficiency narratives, towards 'co-creation and complementary' collaboration paradigms"
				},
				ethics: {
					title: "Ethical Paradoxes and Governance Challenges",
					description: "In-depth discussion of institutional tensions of 'technology for good' in reality"
				}
			}
		},
		// About page
		about: {
			title: "About the Forum",
			subtitle: "Exploring a Symbiotic Future of AI and Humanity"
		},
		// Agenda page  
		agenda: {
			title: "Forum Agenda",
			subtitle: "September 12, 2025 (Friday) · Hangzhou, China"
		},
		// Speakers page
		speakers: {
			title: "Participants", 
			subtitle: "Bringing together representatives from top global universities, research institutions and enterprises"
		}
	}
};

export function t(key, locale = 'zh') {
	const keys = key.split('.');
	let value = translations[locale];
	
	for (const k of keys) {
		value = value?.[k];
	}
	
	return value || key;
}