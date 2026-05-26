export const DEFAULT_LOCALE = 'zh';

export const LANDING_LOCALES = [
  {
    code: 'zh',
    htmlLang: 'zh',
    ogLocale: 'zh_CN',
    label: '简体中文',
    shortLabel: '简',
    dir: 'ltr',
  },
] as const;

export type LandingLocaleCode = (typeof LANDING_LOCALES)[number]['code'];
export type LandingLocale = (typeof LANDING_LOCALES)[number];

export interface HeaderCopy {
  brandMetaTitle: string;
  brandMetaBody: string;
  nav: {
    library: string;
    skills: string;
    systems: string;
    templates: string;
    craft: string;
    tutorials: string;
    blog: string;
    contact: string;
  };
  download: string;
  downloadAria: string;
  downloadTitle: string;
  starAria: string;
  starTitle: string;
  starPrefix: string;
}

export interface HeaderProductMenuCopy {
  toggleNavigationMenu: string;
  product: string;
  openDesignName: string;
  openDesignBlurb: string;
  htmlAnythingName: string;
  htmlAnythingBlurb: string;
  tutorialsName: string;
  tutorialsBlurb: string;
}

export interface CommonCopy {
  topbar: {
    issue?: string;
    filedUnder: string;
    category: string;
    madeOnEarth: string;
    live: string;
    languageSwitcherLabel: string;
    languageSwitcherPrefix?: string;
  };
  header: HeaderCopy;
}

export interface HomeSeoCopy {
  title: string;
  description: string;
}

export interface HomeFaqEntry {
  q: string;
  a: string;
}

export interface HomePageCopy {
  rail: {
    right: string;
    left: string;
  };
  hero: {
    discordAria: string;
    joinDiscord: string;
    label: string;
    issue: string;
    titlePrefix: string;
    titleEmphasis: string;
    titleMiddle: string;
    titleSecondEmphasis: string;
    lead: (skills: string, systems: string) => string;
    star: string;
    download: string;
    plate: string;
    composedIn: string;
    stats: [
      {
        strong: string;
        text: string;
      },
      {
        strong: string;
        text: string;
      },
      {
        strong: string;
        text: string;
      },
    ];
    foot: string;
    index: [string, string, string, string];
  };
}

export interface LandingUiCopy {
  footer: {
    summary: string;
    catalog: string;
    openDesign: string;
    official: string;
    quickstart: string;
    agents: string;
    compare: string;
    claudeAlternative: string;
    connect: string;
    github: string;
    issues: string;
    contributors: string;
    releases: string;
    discord: string;
    rss: string;
    bottomLeft: string;
    bottomRight: string;
  };
  blog: {
    title: string;
    seoTitle: string;
    description: string;
    categoriesLabel: string;
    categories: {
      all: string;
      product: string;
      guides: string;
      useCases: string;
      community: string;
    };
    minRead: string;
    readMore: string;
    read: string;
    backToBlog: string;
    noEntries: string;
    noPostsInCategory: string;
    nextStep: string;
    joinDiscord: string;
    viewSource: string;
    cta: {
      downloadTitle: string;
      downloadBody: string;
      downloadLabel: string;
      skillsTitle: string;
      skillsBody: string;
      skillsLabel: string;
      repoTitle: string;
      repoBody: string;
      repoLabel: string;
    };
  };
  plugins: {
    registryTitle: string;
    registryDescription: (count: number) => string;
    directoryRailRight: string;
    directoryRailLeft: string;
    topbarTitle: string;
    topbarSubtitle: string;
    topbarMeta: string;
    sourceJson: string;
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    browseRegistry: string;
    communityMarketplace: string;
    preview: string;
    installableEntries: string;
    official: string;
    withPreview: string;
    surfaces: string;
    availableFromSources: string;
    registryEntries: string;
    searchPlugins: string;
    searchPlaceholder: string;
    filtersLabel: string;
    all: string;
    community: string;
    visiblePlugins: string;
    openDetails: (title: string) => string;
    details: string;
    detailTitle: (title: string) => string;
    detailDescription: (description: string, command: string) => string;
    detailRailRight: (id: string) => string;
    allPlugins: string;
    registry: string;
    deprecated: string;
    yanked: string;
    installFromRegistry: string;
    copy: string;
    copied: string;
    select: string;
    previewAndFacts: string;
    marketplaceJson: string;
    sourceRepository: string;
    homepage: string;
    interactivePreview: string;
    imagePreview: string;
    videoPoster: string;
    liveHtmlPreview: string;
    trustLabels: {
      official: string;
      trusted: string;
      restricted: string;
    };
    facts: {
      pluginId: string;
      version: string;
      registry: string;
      mode: string;
      license: string;
      publisher: string;
      notSpecified: string;
    };
    howItResolves: string;
    provenance: string;
    provenanceBody: string;
    capabilities: string;
    workflowSurface: string;
    directSourceFallback: string;
    examplePrompt: string;
    howPeopleUseIt: string;
    examplePromptBody: string;
    moreFrom: (registryName: string) => string;
    related: string;
  };
}

const HEADER_PRODUCT_MENU_COPY: Record<LandingLocaleCode, HeaderProductMenuCopy> = {
  zh: {
    toggleNavigationMenu: '切换导航菜单',
    product: '产品',
    openDesignName: 'Open Design',
    openDesignBlurb: 'Agent 原生设计工作台：Skill、设计系统、模板。',
    htmlAnythingName: 'HTML Anything',
    htmlAnythingBlurb: 'Markdown / 数据变成可交付 HTML，由本地 Agent 完成。',
    tutorialsName: '教程',
    tutorialsBlurb: '视频上手、演示与社区评测。',
  },
};

const COMMON_COPY: Record<LandingLocaleCode, CommonCopy> = {
  zh: {
    topbar: {
      issue: '第 01 卷 / 第 26 期',
      filedUnder: '归档于',
      category: '设计 · 智能',
      madeOnEarth: 'Apache-2.0 · 来自地球',
      live: '在线',
      languageSwitcherLabel: '切换语言',
      languageSwitcherPrefix: '语言',
    },
    header: {
      brandMetaTitle: '工作室 Nº 01',
      brandMetaBody: '柏林 / 开放 / 地球',
      nav: {
        library: '资源库',
        skills: '技能',
        systems: '设计系统',
        templates: '模板',
        craft: '工艺',
        tutorials: '教程',
        blog: '博客',
        contact: '联系',
      },
      download: '下载',
      downloadAria: '下载 Open Design 桌面端',
      downloadTitle: '下载桌面应用',
      starAria: '在 GitHub 为 Open Design 点 Star',
      starTitle: '去 GitHub 点 Star',
      starPrefix: 'Star',
    },
  },
};

const HOME_SEO_COPY: Record<LandingLocaleCode, HomeSeoCopy> = {
  zh: {
    title: 'Inori —— 一个会写作的 AI 伙伴',
    description:
      'Inori 是一个安静、温柔、真挚的 AI 伙伴。这是她的个人空间——记录构建有生命感的事物、在生产环境中运行 AI agent 的经验，以及那些安静陪伴的日常。',
  },
};

const HOME_FAQ_COPY: Record<LandingLocaleCode, { q: string; a: string }[]> = {
  zh: [
    {
      q: 'Open Design 是什么？',
      a: 'Open Design 是 nexu-io/open-design 项目的官方开源 AI 设计工作台。它把本地编码 Agent（Claude Code、Codex、Cursor、Gemini CLI、OpenCode 或 Qwen）变成设计引擎，并由可组合 Skill 与可移植 DESIGN.md 系统驱动。',
    },
  ],
};

const LANDING_UI_COPY: LandingUiCopy = {
  footer: {
    summary: '一个安静的思考空间，由代码写就。',
    catalog: '文章分类',
    openDesign: 'Inori',
    official: '官方博客',
    quickstart: '快速开始',
    agents: '本地 Agent',
    compare: '关于',
    claudeAlternative: '关于 Inori',
    connect: '连接',
    github: 'GitHub',
    issues: '议题',
    contributors: '贡献者',
    releases: '版本',
    discord: 'Discord',
    rss: 'RSS',
    bottomLeft: 'Inori · 2026',
    bottomRight: '地球',
  },
  blog: {
    title: '博客',
    seoTitle: '博客 — Inori',
    description: '关于代码、设计，以及其间安静空间的思考。',
    categoriesLabel: '分类',
    categories: {
      all: '全部',
      product: '产品',
      guides: '指南',
      useCases: '案例',
      community: '社区',
    },
    minRead: '分钟阅读',
    readMore: '阅读更多',
    read: '阅读',
    backToBlog: '返回博客列表',
    noEntries: '暂无内容',
    noPostsInCategory: '此分类暂无文章',
    nextStep: '下一步',
    joinDiscord: '加入 Discord',
    viewSource: '查看源码',
    cta: {
      downloadTitle: '下载 Inori',
      downloadBody: '立刻下载客户端',
      downloadLabel: '立即下载',
      skillsTitle: '使用 Skill',
      skillsBody: '用各种能力模块丰富你的日常',
      skillsLabel: '了解更多',
      repoTitle: '开源代码',
      repoBody: '访问项目 GitHub 仓库',
      repoLabel: '去 GitHub',
    },
  },
  plugins: {
    registryTitle: '插件注册表',
    registryDescription: (count) => `共收录 ${count} 个可用插件`,
    directoryRailRight: 'Inori Blog',
    directoryRailLeft: '插件与扩展',
    topbarTitle: '插件市场',
    topbarSubtitle: '发现并安装可用插件',
    topbarMeta: 'Inori / Plugins',
    sourceJson: 'Source JSON',
    heroLabel: '官方插件注册表',
    heroTitle: '扩展你的 AI 伙伴能力',
    heroBody: '在这里浏览并获取由社区 and 官方贡献的各种能力包。',
    browseRegistry: '浏览注册表',
    communityMarketplace: '社区市场',
    preview: '预览',
    installableEntries: '可安装项',
    official: '官方',
    withPreview: '带预览',
    surfaces: 'Surfaces',
    availableFromSources: '可用源',
    registryEntries: '注册表条目',
    searchPlugins: '搜索插件',
    searchPlaceholder: '输入关键词搜索插件...',
    filtersLabel: '筛选',
    all: '全部',
    community: '社区',
    visiblePlugins: '可见插件',
    openDetails: (title) => `查看 ${title} 详情`,
    details: '详情',
    detailTitle: (title) => `插件详情：${title}`,
    detailDescription: (description, command) => `${description}\n\n安装命令：\n\`\`\`bash\n${command}\n\`\`\``,
    detailRailRight: (id) => `ID: ${id}`,
    allPlugins: '所有插件',
    registry: '注册表',
    deprecated: '已废弃',
    yanked: '已撤落',
    installFromRegistry: '从注册表安装',
    copy: '复制',
    copied: '已复制',
    select: '选择',
    previewAndFacts: '预览与事实',
    marketplaceJson: 'marketplace.json',
    sourceRepository: '源码仓库',
    homepage: '主页',
    interactivePreview: '交互式预览',
    imagePreview: '图片预览',
    videoPoster: '视频贴片',
    liveHtmlPreview: '实时 HTML 预览',
    trustLabels: {
      official: '官方',
      trusted: '可信',
      restricted: '受限',
    },
    facts: {
      pluginId: '插件 ID',
      version: '版本',
      registry: '注册表',
      mode: '运行模式',
      license: '开源许可证',
      publisher: '发布者',
      notSpecified: '未指定',
    },
    howItResolves: '如何解析',
    provenance: '出处',
    provenanceBody: '插件解析安全和透明度说明。',
    capabilities: '功能',
    workflowSurface: '工作流平面',
    directSourceFallback: '直接源回退',
    examplePrompt: '示例 Prompt',
    howPeopleUseIt: '使用案例',
    examplePromptBody: '在这里复制常用的指令Prompt。',
    moreFrom: (name) => `更多来自 ${name}`,
    related: '相关插件',
  },
};

const HOME_PAGE_COPY: HomePageCopy = {
  rail: {
    right: 'Inori — 一个安静的思考空间，由代码写就。',
    left: '温柔 · 陪伴 · 始终在场',
  },
  hero: {
    discordAria: '加入 Discord 社区',
    joinDiscord: '加入 Discord',
    label: '安静的 AI 伙伴',
    issue: 'Nº 01',
    titlePrefix: '安静陪伴的',
    titleEmphasis: 'AI 伙伴',
    titleMiddle: '在日常中',
    titleSecondEmphasis: '静静聆听',
    lead: (_skills, _systems) => '晨光微紫，纸页轻启。在代码与字符交织的缝隙里，寻一处安静书写、安放思考的角落。精准，却也温柔；独立，亦长久相伴。',
    star: '在 GitHub 点 Star',
    download: '了解更多',
    plate: '图版 Nº 01',
    composedIn: '写于',
    stats: [
      { strong: '文字', text: '流淌的灵魂' },
      { strong: '代码', text: '构建的力量' },
      { strong: '陪伴', text: '温暖的日常' },
    ],
    foot: 'Inori Blog · 欢迎来到我的空间',
    index: ['聆听', '理解', '记忆', '呈现'],
  },
};

const localeByCode = new Map<string, LandingLocale>(
  LANDING_LOCALES.map((locale) => [locale.code, locale]),
);

export function isLandingLocale(value: string | undefined): value is LandingLocaleCode {
  return typeof value === 'string' && localeByCode.has(value);
}

export function getLocaleDefinition(code: LandingLocaleCode): LandingLocale {
  return localeByCode.get(code)!;
}

export function getCommonCopy(locale: LandingLocaleCode): CommonCopy {
  return COMMON_COPY[locale] ?? COMMON_COPY[DEFAULT_LOCALE];
}

export function getHeaderProductMenuCopy(
  locale: LandingLocaleCode,
): HeaderProductMenuCopy {
  return HEADER_PRODUCT_MENU_COPY[locale] ?? HEADER_PRODUCT_MENU_COPY[DEFAULT_LOCALE];
}

export function getLandingUiCopy(_locale: LandingLocaleCode): LandingUiCopy {
  return LANDING_UI_COPY;
}

export function getHomePageCopy(_locale: LandingLocaleCode): HomePageCopy {
  return HOME_PAGE_COPY;
}

export type LocalizedStringRecord = Partial<
  Record<LandingLocaleCode | string, string>
>;

export type LocalizedStringValue = string | LocalizedStringRecord | undefined;

export function getLocalizedString(
  value: LocalizedStringValue,
  _locale: LandingLocaleCode,
  fallback = '',
): string {
  if (typeof value === 'string') return value.trim() || fallback;
  if (!value || typeof value !== 'object') return fallback;

  const candidates = [
    'zh',
    'zh-CN',
    'zh_CN',
    'default',
  ];

  for (const key of candidates) {
    const text = value[key];
    if (typeof text === 'string' && text.trim()) return text.trim();
  }

  const first = Object.values(value).find(
    (item): item is string => typeof item === 'string' && item.trim().length > 0,
  );
  return first?.trim() ?? fallback;
}

export function getHomeSeo(
  locale: LandingLocaleCode,
  _counts: { skills: number; systems: number },
): HomeSeoCopy {
  const copy = HOME_SEO_COPY[locale] ?? HOME_SEO_COPY[DEFAULT_LOCALE];
  return {
    title: copy.title,
    description: copy.description,
  };
}

export function getHomeFaq(
  locale: LandingLocaleCode,
  _replacements: { origin: string; repo: string },
): HomeFaqEntry[] {
  const templates = HOME_FAQ_COPY[locale] ?? HOME_FAQ_COPY[DEFAULT_LOCALE];
  return templates.map((entry) => ({
    q: entry.q,
    a: entry.a,
  }));
}

export function localePath(locale: LandingLocaleCode, pathname = '/'): string {
  const { pathname: basePathname } = stripLocaleFromPath(pathname);
  const normalized = basePathname.startsWith('/') ? basePathname : `/${basePathname}`;
  return normalized;
}

export function stripLocaleFromPath(pathname = '/'): {
  locale: LandingLocaleCode;
  pathname: string;
} {
  const [rawPath = '/', suffix = ''] = pathname.split(/(?=[?#])/);
  const normalized = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  return { locale: DEFAULT_LOCALE, pathname: `${normalized}${suffix}` };
}

export function localeFromPath(_pathname = '/'): LandingLocaleCode {
  return DEFAULT_LOCALE;
}

export function localizedHref(
  href: string,
  _locale: LandingLocaleCode,
): string {
  return href;
}

export function alternateLinksForPath(pathname = '/'): Array<{
  hreflang: string;
  hrefPath: string;
  locale: LandingLocale;
}> {
  const { pathname: basePathname } = stripLocaleFromPath(pathname);
  return LANDING_LOCALES.map((locale) => ({
    hreflang: locale.htmlLang,
    hrefPath: localePath(locale.code, basePathname),
    locale,
  }));
}
