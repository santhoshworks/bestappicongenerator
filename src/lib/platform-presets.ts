export interface IconSize {
  name: string;
  width: number;
  height: number;
  folder?: string;
  type?: 'icon' | 'banner' | 'splash';
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  icon: string;
  sizes: IconSize[];
  generateIco?: boolean;
  generateManifest?: boolean;
}

export const PLATFORM_PRESETS: Record<string, Platform> = {
  ios: {
    id: 'ios',
    name: 'iOS App Store',
    description: 'iPhone, iPad, App Store icons',
    icon: '🍎',
    sizes: [
      { name: 'AppStore-1024', width: 1024, height: 1024, folder: 'ios' },
      { name: 'iPhone-180@3x', width: 180, height: 180, folder: 'ios' },
      { name: 'iPhone-120@2x', width: 120, height: 120, folder: 'ios' },
      { name: 'iPad-167', width: 167, height: 167, folder: 'ios' },
      { name: 'iPad-152', width: 152, height: 152, folder: 'ios' },
      { name: 'iPadPro-83.5@2x', width: 167, height: 167, folder: 'ios' },
      { name: 'Spotlight-120@3x', width: 120, height: 120, folder: 'ios' },
      { name: 'Spotlight-80@2x', width: 80, height: 80, folder: 'ios' },
      { name: 'Spotlight-40', width: 40, height: 40, folder: 'ios' },
      { name: 'Settings-87@3x', width: 87, height: 87, folder: 'ios' },
      { name: 'Settings-58@2x', width: 58, height: 58, folder: 'ios' },
      { name: 'Settings-29', width: 29, height: 29, folder: 'ios' },
      { name: 'Notification-60@3x', width: 60, height: 60, folder: 'ios' },
      { name: 'Notification-40@2x', width: 40, height: 40, folder: 'ios' },
      { name: 'Notification-20', width: 20, height: 20, folder: 'ios' },
    ],
  },
  android: {
    id: 'android',
    name: 'Google Play Store',
    description: 'Android adaptive icons, Play Store',
    icon: '🤖',
    sizes: [
      { name: 'playstore-512', width: 512, height: 512, folder: 'android' },
      { name: 'xxxhdpi-192', width: 192, height: 192, folder: 'android/mipmap-xxxhdpi' },
      { name: 'xxhdpi-144', width: 144, height: 144, folder: 'android/mipmap-xxhdpi' },
      { name: 'xhdpi-96', width: 96, height: 96, folder: 'android/mipmap-xhdpi' },
      { name: 'hdpi-72', width: 72, height: 72, folder: 'android/mipmap-hdpi' },
      { name: 'mdpi-48', width: 48, height: 48, folder: 'android/mipmap-mdpi' },
      { name: 'ldpi-36', width: 36, height: 36, folder: 'android/mipmap-ldpi' },
    ],
  },
  web: {
    id: 'web',
    name: 'Website Favicon',
    description: 'Favicons, Apple Touch, PWA icons',
    icon: '🌐',
    sizes: [
      { name: 'favicon-32', width: 32, height: 32, folder: 'favicon' },
      { name: 'favicon-16', width: 16, height: 16, folder: 'favicon' },
      { name: 'apple-touch-icon-180', width: 180, height: 180, folder: 'favicon' },
      { name: 'apple-touch-icon-152', width: 152, height: 152, folder: 'favicon' },
      { name: 'apple-touch-icon-144', width: 144, height: 144, folder: 'favicon' },
      { name: 'apple-touch-icon-120', width: 120, height: 120, folder: 'favicon' },
      { name: 'apple-touch-icon-114', width: 114, height: 114, folder: 'favicon' },
      { name: 'apple-touch-icon-76', width: 76, height: 76, folder: 'favicon' },
      { name: 'apple-touch-icon-72', width: 72, height: 72, folder: 'favicon' },
      { name: 'apple-touch-icon-60', width: 60, height: 60, folder: 'favicon' },
      { name: 'apple-touch-icon-57', width: 57, height: 57, folder: 'favicon' },
      { name: 'mstile-150', width: 150, height: 150, folder: 'favicon' },
      { name: 'mstile-310x150', width: 310, height: 150, folder: 'favicon' },
      { name: 'mstile-310', width: 310, height: 310, folder: 'favicon' },
    ],
    generateIco: true,
  },
  pwa: {
    id: 'pwa',
    name: 'PWA / Web App',
    description: 'Progressive Web App manifest icons',
    icon: '📱',
    sizes: [
      { name: 'pwa-512', width: 512, height: 512, folder: 'pwa' },
      { name: 'pwa-384', width: 384, height: 384, folder: 'pwa' },
      { name: 'pwa-256', width: 256, height: 256, folder: 'pwa' },
      { name: 'pwa-192', width: 192, height: 192, folder: 'pwa' },
      { name: 'pwa-144', width: 144, height: 144, folder: 'pwa' },
      { name: 'pwa-128', width: 128, height: 128, folder: 'pwa' },
      { name: 'pwa-96', width: 96, height: 96, folder: 'pwa' },
      { name: 'pwa-72', width: 72, height: 72, folder: 'pwa' },
      { name: 'pwa-48', width: 48, height: 48, folder: 'pwa' },
    ],
    generateManifest: true,
  },
  macos: {
    id: 'macos',
    name: 'macOS App',
    description: 'Mac App Store, dock icons',
    icon: '🖥️',
    sizes: [
      { name: 'icon-1024', width: 1024, height: 1024, folder: 'macos' },
      { name: 'icon-512@2x', width: 1024, height: 1024, folder: 'macos' },
      { name: 'icon-512', width: 512, height: 512, folder: 'macos' },
      { name: 'icon-256@2x', width: 512, height: 512, folder: 'macos' },
      { name: 'icon-256', width: 256, height: 256, folder: 'macos' },
      { name: 'icon-128@2x', width: 256, height: 256, folder: 'macos' },
      { name: 'icon-128', width: 128, height: 128, folder: 'macos' },
      { name: 'icon-64@2x', width: 128, height: 128, folder: 'macos' },
      { name: 'icon-64', width: 64, height: 64, folder: 'macos' },
      { name: 'icon-32@2x', width: 64, height: 64, folder: 'macos' },
      { name: 'icon-32', width: 32, height: 32, folder: 'macos' },
      { name: 'icon-16@2x', width: 32, height: 32, folder: 'macos' },
      { name: 'icon-16', width: 16, height: 16, folder: 'macos' },
    ],
  },
  windows: {
    id: 'windows',
    name: 'Windows App',
    description: 'Windows Store, desktop icons',
    icon: '🪟',
    sizes: [
      { name: 'StoreLogo-50', width: 50, height: 50, folder: 'windows' },
      { name: 'Square44x44Logo', width: 44, height: 44, folder: 'windows' },
      { name: 'Square71x71Logo', width: 71, height: 71, folder: 'windows' },
      { name: 'Square150x150Logo', width: 150, height: 150, folder: 'windows' },
      { name: 'Square310x310Logo', width: 310, height: 310, folder: 'windows' },
      { name: 'Wide310x150Logo', width: 310, height: 150, folder: 'windows' },
      { name: 'icon-256', width: 256, height: 256, folder: 'windows' },
      { name: 'icon-128', width: 128, height: 128, folder: 'windows' },
      { name: 'icon-64', width: 64, height: 64, folder: 'windows' },
      { name: 'icon-48', width: 48, height: 48, folder: 'windows' },
      { name: 'icon-32', width: 32, height: 32, folder: 'windows' },
      { name: 'icon-24', width: 24, height: 24, folder: 'windows' },
      { name: 'icon-16', width: 16, height: 16, folder: 'windows' },
    ],
  },
  chrome: {
    id: 'chrome',
    name: 'Chrome Extension',
    description: 'Browser extension icons',
    icon: '🧩',
    sizes: [
      { name: 'icon-128', width: 128, height: 128, folder: 'chrome-extension' },
      { name: 'icon-48', width: 48, height: 48, folder: 'chrome-extension' },
      { name: 'icon-32', width: 32, height: 32, folder: 'chrome-extension' },
      { name: 'icon-16', width: 16, height: 16, folder: 'chrome-extension' },
    ],
  },
  vscode: {
    id: 'vscode',
    name: 'VS Code Extension',
    description: 'Visual Studio Code marketplace',
    icon: '💻',
    sizes: [
      { name: 'icon-256', width: 256, height: 256, folder: 'vscode' },
      { name: 'icon-128', width: 128, height: 128, folder: 'vscode' },
    ],
  },
  odoo: {
    id: 'odoo',
    name: 'Odoo App Store',
    description: 'Odoo module icons and banners',
    icon: '🟣',
    sizes: [
      { name: 'icon-128', width: 128, height: 128, folder: 'odoo' },
      { name: 'banner-1024x368', width: 1024, height: 368, folder: 'odoo', type: 'banner' },
    ],
  },
  social: {
    id: 'social',
    name: 'Social Media',
    description: 'OG images, Twitter cards, LinkedIn',
    icon: '📣',
    sizes: [
      { name: 'og-image-1200x630', width: 1200, height: 630, folder: 'social', type: 'banner' },
      { name: 'twitter-card-1200x600', width: 1200, height: 600, folder: 'social', type: 'banner' },
      { name: 'linkedin-1200x627', width: 1200, height: 627, folder: 'social', type: 'banner' },
      { name: 'facebook-cover-820x312', width: 820, height: 312, folder: 'social', type: 'banner' },
      { name: 'twitter-header-1500x500', width: 1500, height: 500, folder: 'social', type: 'banner' },
      { name: 'youtube-thumbnail-1280x720', width: 1280, height: 720, folder: 'social', type: 'banner' },
    ],
  },
  watchos: {
    id: 'watchos',
    name: 'Apple Watch',
    description: 'watchOS app icons',
    icon: '⌚',
    sizes: [
      { name: 'watch-1024', width: 1024, height: 1024, folder: 'watchos' },
      { name: 'watch-196', width: 196, height: 196, folder: 'watchos' },
      { name: 'watch-172', width: 172, height: 172, folder: 'watchos' },
      { name: 'watch-100', width: 100, height: 100, folder: 'watchos' },
      { name: 'watch-88', width: 88, height: 88, folder: 'watchos' },
      { name: 'watch-87', width: 87, height: 87, folder: 'watchos' },
      { name: 'watch-80', width: 80, height: 80, folder: 'watchos' },
      { name: 'watch-58', width: 58, height: 58, folder: 'watchos' },
      { name: 'watch-55', width: 55, height: 55, folder: 'watchos' },
      { name: 'watch-48', width: 48, height: 48, folder: 'watchos' },
    ],
  },
};

export const getAllPlatforms = (): Platform[] => Object.values(PLATFORM_PRESETS);

export const getPlatformById = (id: string): Platform | undefined => PLATFORM_PRESETS[id];

export const getTotalIconCount = (platformIds: string[]): number => {
  return platformIds.reduce((total, id) => {
    const platform = PLATFORM_PRESETS[id];
    return total + (platform?.sizes.length || 0);
  }, 0);
};
