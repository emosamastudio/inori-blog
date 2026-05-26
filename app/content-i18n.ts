import {
  DEFAULT_LOCALE,
  getLocaleDefinition,
  type LandingLocaleCode,
  type LocalizedStringValue,
} from './i18n';

type ContentCopy = {
  skillNoun: string;
  systemNoun: string;
  templateNoun: string;
  craftNoun: string;
  pluginNoun: string;
  blogNoun: string;
  unknownTag: string;
  skillDescription: (name: string, labels: string[]) => string;
  systemTagline: (name: string, category: string) => string;
  systemAtmosphere: (name: string, category: string, paletteCount: number) => string;
  craftName: (name: string) => string;
  craftSummary: (name: string) => string;
  templateName: (name: string) => string;
  templateSummary: (name: string) => string;
  pluginTitle: (kind: string, id: string) => string;
  pluginDescription: (kind: string, labels: string[]) => string;
  pluginExample: (kind: string) => string;
  blogTitle: (topic: string) => string;
  blogSummary: (topic: string) => string;
  blogBody: (topic: string, summary: string) => string;
};

const CONTENT_COPY: Record<'zh', ContentCopy> = {
  zh: {
    skillNoun: 'Skill',
    systemNoun: '设计系统',
    templateNoun: '模板',
    craftNoun: '工艺规则',
    pluginNoun: '插件',
    blogNoun: '文章',
    unknownTag: '分类',
    skillDescription: (name, labels) => `${name} 是一个可组合的 Open Design Skill，用于${labels.join('、') || '设计产出'}工作流；可由本地代理调用，并和仓库中的设计系统一起复用。`,
    systemTagline: (name, category) => `${name} 设计系统将${category}风格整理成可移植的 DESIGN.md 规则，供每个 Skill 复用。`,
    systemAtmosphere: (name, category, paletteCount) => `${name} 以${category}为视觉方向，包含 ${paletteCount} 个核心色板、排版节奏、组件边界和反模式约束。`,
    craftName: (name) => `${name}工艺规则`,
    craftSummary: (name) => `这条 Open Design 工艺规则定义 ${name} 的执行标准，帮助代理在生成 artifact 时保持一致、可读和可交付。`,
    templateName: (name) => `${name}模板`,
    templateSummary: (name) => `${name} 是可复用的 Open Design Live Artifact 模板，包含渲染入口、示例数据 and 可 fork 的文件结构。`,
    pluginTitle: (kind, id) => `${kind}插件 · ${id}`,
    pluginDescription: (kind, labels) => `用于${kind}工作流的 Open Design 插件。安装后可在本地 daemon and od CLI 中复用${labels.length ? `，覆盖${labels.join('、')}` : ''}。`,
    pluginExample: (kind) => `使用该插件创建一个${kind}任务，并在本地 Open Design 工作区中查看生成结果。`,
    blogTitle: (topic) => `Open Design 指南：${topic}`,
    blogSummary: (topic) => `这篇本地化摘要说明 ${topic} 与 Open Design 的本地优先、BYOK 和可组合 Skill 工作流之间的关系。`,
    blogBody: (topic, summary) => `<p>${summary}</p><h2>本地化摘要</h2><p>这篇文章围绕 ${topic} 展开，说明 Open Design 如何把设计 artifact、Skill、设计系统和本地代理工作流连接起来。</p><p>当前页面使用站内 i18n fallback 渲染本地化正文；完整人工翻译可继续通过 frontmatter 的 <code>i18n.bodyHtml</code> 覆盖。</p>`,
  },
};

const TAXONOMY_TERMS: Record<string, Partial<Record<LandingLocaleCode, string>>> = {
  prototype: { zh: '原型' },
  template: { zh: '模板' },
  deck: { zh: '演示文稿' },
  image: { zh: '图像' },
  video: { zh: '视频' },
  audio: { zh: '音频' },
  utility: { zh: '工具' },
  design: { zh: '设计' },
  marketing: { zh: '营销' },
  operations: { zh: '运营' },
  product: { zh: '产品' },
  personal: { zh: '个人' },
  finance: { zh: '金融' },
  docs: { zh: '文档' },
};

const CRAFT_LABELS: Record<string, Partial<Record<LandingLocaleCode, string>>> = {
  color: { zh: '色彩' },
  typography: { zh: '排版' },
  'rtl-and-bidi': { zh: 'RTL 与双向文本' },
};

const CATEGORY_LABELS: Record<string, Partial<Record<LandingLocaleCode, string>>> = {
  'ai & llm': { zh: 'AI 与大模型' },
  'developer tools': { zh: '开发者工具' },
  'productivity & saas': { zh: '效率与 SaaS' },
  'design & creative': { zh: '设计与创意' },
};

const normalizeTerm = (value: string) => value.trim().toLowerCase();

const copyFor = (locale: LandingLocaleCode): ContentCopy | undefined =>
  CONTENT_COPY[locale];

const compactId = (value: string) =>
  value
    .split('/')
    .at(-1)!
    .replace(/^example-/, '')
    .replace(/^design-system-/, '')
    .replace(/^video-template-/, '')
    .replace(/^image-template-/, '')
    .replace(/^od-/, 'od-');

const BLOG_TOPIC_TITLES: Record<string, Partial<Record<Exclude<LandingLocaleCode, 'en'>, string>>> = {
  '31-skills-72-systems-how-the-library-works': {
    zh: '31 个 Skill 与 72 个系统的资料库运作方式',
  },
  'byok-design-workflow-claude-codex-qwen': {
    zh: '面向 Claude、Codex 与 Qwen 的 BYOK 设计工作流',
  },
  'byok-reality-check-5-things-that-break': {
    zh: 'BYOK 现实检查：5 个容易断裂的环节',
  },
  'layout-layer-canvas-used-to-hide': {
    zh: '过去被画布隐藏的布局层',
  },
  'open-source-alternative-to-claude-design': {
    zh: 'Claude Design 的开源替代方案',
  },
  'port-figma-workflow-open-design-plugin': {
    zh: '把 Figma 工作流迁移成 Open Design 插件',
  },
  'why-we-built-open-design-as-a-skill-layer': {
    zh: '为什么把 Open Design 做成 Skill 层',
  },
};

const localizedBlogTopic = (id: string, locale: LandingLocaleCode) => {
  const compact = compactId(id);
  if (locale === DEFAULT_LOCALE) return compact.replace(/-/g, ' ');
  return BLOG_TOPIC_TITLES[compact]?.[locale] ?? compact.replace(/-/g, ' ');
};

export function explicitLocalizedString(
  value: LocalizedStringValue,
  locale: LandingLocaleCode,
): string | undefined {
  if (typeof value === 'string') {
    return locale === DEFAULT_LOCALE && value.trim() ? value.trim() : undefined;
  }
  if (!value || typeof value !== 'object') return undefined;

  const localeDef = getLocaleDefinition(locale);
  const candidates = [
    locale,
    localeDef.htmlLang,
    localeDef.htmlLang.toLowerCase(),
    localeDef.htmlLang.replace('-', '_'),
    locale === 'zh' ? 'zh-CN' : undefined,
  ].filter((item): item is string => Boolean(item));

  for (const key of candidates) {
    const text = value[key];
    if (typeof text === 'string' && text.trim()) {
      return text.trim();
    }
  }
  return undefined;
}

export function localizeTaxonomyValue(
  value: string | undefined,
  locale: LandingLocaleCode,
): string | undefined {
  if (!value) return undefined;
  if (locale === DEFAULT_LOCALE) return value;
  const key = normalizeTerm(value);
  return (
    TAXONOMY_TERMS[key]?.[locale] ??
    CATEGORY_LABELS[key]?.[locale] ??
    copyFor(locale)?.unknownTag
  );
}

export function localizeContentTag(
  value: string | undefined,
  locale: LandingLocaleCode,
): string | undefined {
  if (!value) return undefined;
  if (locale === DEFAULT_LOCALE) return value;
  return localizeTaxonomyValue(value, locale) ?? copyFor(locale)?.unknownTag;
}

export function localizeSkillDescription(args: {
  name: string;
  mode?: string;
  scenario?: string;
  category?: string;
  locale: LandingLocaleCode;
  fallback: string;
}): string {
  const copy = copyFor(args.locale);
  if (!copy) return args.fallback;
  const labels = [args.mode, args.scenario, args.category]
    .map((value) => localizeTaxonomyValue(value, args.locale))
    .filter((value): value is string => Boolean(value));
  return copy.skillDescription(args.name, Array.from(new Set(labels)));
}

export function localizeSystemText(args: {
  name: string;
  category: string;
  paletteCount: number;
  locale: LandingLocaleCode;
  fallbackTagline: string;
  fallbackAtmosphere: string;
}): { category: string; tagline: string; atmosphere: string } {
  const copy = copyFor(args.locale);
  if (!copy) {
    return {
      category: args.category,
      tagline: args.fallbackTagline,
      atmosphere: args.fallbackAtmosphere,
    };
  }
  const category = localizeTaxonomyValue(args.category, args.locale) ?? copy.systemNoun;
  return {
    category,
    tagline: copy.systemTagline(args.name, category),
    atmosphere: copy.systemAtmosphere(args.name, category, args.paletteCount),
  };
}

export function localizeCraftText(args: {
  slug: string;
  name: string;
  summary: string;
  locale: LandingLocaleCode;
}): { name: string; summary: string } {
  const copy = copyFor(args.locale);
  if (!copy) return { name: args.name, summary: args.summary };
  const baseName = CRAFT_LABELS[args.slug]?.[args.locale] ?? args.name;
  return {
    name: copy.craftName(baseName),
    summary: copy.craftSummary(baseName),
  };
}

export function localizeTemplateText(args: {
  name: string;
  summary: string;
  locale: LandingLocaleCode;
}): { name: string; summary: string } {
  const copy = copyFor(args.locale);
  if (!copy) return { name: args.name, summary: args.summary };
  return {
    name: copy.templateName(args.name),
    summary: copy.templateSummary(args.name),
  };
}

export function localizePluginText(args: {
  id: string;
  title: string;
  description: string;
  locale: LandingLocaleCode;
  mode?: string;
  taskKind?: string;
  surface?: string;
  visualKind?: string;
  labels?: string[];
}): { title: string; description: string; exampleQuery: string | undefined } {
  const copy = copyFor(args.locale);
  if (!copy) {
    return {
      title: args.title,
      description: args.description,
      exampleQuery: undefined,
    };
  }
  const kind =
    localizeTaxonomyValue(args.mode ?? args.surface ?? args.visualKind, args.locale) ??
    copy.pluginNoun;
  const labels = (args.labels ?? [])
    .map((value) => localizeTaxonomyValue(value, args.locale))
    .filter((value): value is string => Boolean(value));
  return {
    title: copy.pluginTitle(kind, compactId(args.id)),
    description: copy.pluginDescription(kind, Array.from(new Set(labels)).slice(0, 4)),
    exampleQuery: copy.pluginExample(kind),
  };
}

export function localizeBlogPostText(args: {
  id: string;
  title: string;
  summary: string;
  category: string;
  locale: LandingLocaleCode;
}): { title: string; summary: string; category: string; bodyHtml: string | undefined } {
  const copy = copyFor(args.locale);
  if (!copy) {
    return {
      title: args.title,
      summary: args.summary,
      category: args.category,
      bodyHtml: undefined,
    };
  }
  const topic = localizedBlogTopic(args.id, args.locale);
  const title = copy.blogTitle(topic);
  const summary = copy.blogSummary(topic);
  return {
    title,
    summary,
    category: localizeTaxonomyValue(args.category, args.locale) ?? copy.blogNoun,
    bodyHtml: copy.blogBody(topic, summary),
  };
}
