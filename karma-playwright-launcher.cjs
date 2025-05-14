const { devices, chromium, firefox, webkit } = require('playwright');

function playwrightBrowser(self, name, browserType, headless, args, logger) {
  self.name = self.displayName = name;

  self.on('start', async url => {
    const log = logger.create(self.displayName);

    try {
      self._browser = await browserType.launch({ headless, ...args.launchOptions });
      self._page = await self._browser.newPage({ ...devices[args.device], ...args.contextOptions });
      await self._page.goto(url);
    } catch (err) {
      log.error(err);
      self._done('failure');
    }
  });

  self.on('kill', async done => {
    const log = logger.create(self.displayName);

    try {
      if (self._page) {
        // explicitly closing the page avoids page reload errors using new headless mode
        await self._page.close();
      }
      if (self._browser) {
        await self._browser.close();
      }
    } catch (err) {
      log.error(err);
    }

    self._done();
    return process.nextTick(done);
  });
}

function ChromiumHeadlessBrowser(
  args,
  logger,
  baseLauncherDecorator,
  captureTimeoutLauncherDecorator,
  retryLauncherDecorator
) {
  baseLauncherDecorator(this);
  captureTimeoutLauncherDecorator(this);
  retryLauncherDecorator(this);

  const defaultArgs = {
    device: 'Desktop Chrome',
    launchOptions: {
      // this enables the new headless mode
      channel: 'chromium'
    }
  };

  playwrightBrowser(this, 'ChromiumHeadless', chromium, true, { ...defaultArgs, ...args }, logger);
}

function FirefoxHeadlessBrowser(
  args,
  logger,
  baseLauncherDecorator,
  captureTimeoutLauncherDecorator,
  retryLauncherDecorator
) {
  baseLauncherDecorator(this);
  captureTimeoutLauncherDecorator(this);
  retryLauncherDecorator(this);

  const defaultArgs = {
    device: 'Desktop Firefox',
    launchOptions: {
      // this aligns the default font with Chromium where setting this is...hard
      firefoxUserPrefs: { 'font.name.sans-serif.x-western': 'Liberation Sans' }
    }
  };

  playwrightBrowser(this, 'FirefoxHeadless', firefox, true, { ...defaultArgs, ...args }, logger);
}

function SafariHeadlessBrowser(
  args,
  logger,
  baseLauncherDecorator,
  captureTimeoutLauncherDecorator,
  retryLauncherDecorator
) {
  baseLauncherDecorator(this);
  captureTimeoutLauncherDecorator(this);
  retryLauncherDecorator(this);

  const defaultArgs = {
    device: 'Desktop Safari'
  };

  playwrightBrowser(this, 'SafariHeadless', webkit, true, { ...defaultArgs, ...args }, logger);
}

module.exports = {
  'launcher:PlaywrightChromiumHeadless': ['type', ChromiumHeadlessBrowser],
  'launcher:PlaywrightFirefoxHeadless': ['type', FirefoxHeadlessBrowser],
  'launcher:PlaywrightSafariHeadless': ['type', SafariHeadlessBrowser]
};
