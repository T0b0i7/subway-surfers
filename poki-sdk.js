/**
 * PokiSDK Bridge Mock pour Subway Surfers PWA
 * Assure un démarrage instantané 100% hors-ligne sans dépendance réseau externe.
 */
(function () {
  'use strict';
  console.log('[PokiSDK] Initialisation du pont Subway Surfers...');

  window.pokiReady = true;

  const PokiMock = {
    init: function () {
      console.log('[PokiSDK] init() -> Résolu immédiatement');
      window.pokiReady = true;
      if (window.pokiBridge && window.unityGame && typeof window.unityGame.SendMessage === 'function') {
        try {
          window.unityGame.SendMessage(window.pokiBridge, 'ready');
        } catch (e) {}
      }
      return Promise.resolve();
    },
    initWithVideoHB: function () {
      return this.init();
    },
    customEvent: function () {},
    gameLoadingStart: function () {
      console.log('[PokiSDK] gameLoadingStart');
    },
    gameLoadingFinished: function () {
      console.log('[PokiSDK] gameLoadingFinished');
    },
    gameInteractive: function () {
      console.log('[PokiSDK] gameInteractive');
    },
    gameplayStart: function () {
      console.log('[PokiSDK] gameplayStart');
    },
    gameplayStop: function () {
      console.log('[PokiSDK] gameplayStop');
    },
    gameLoadingProgress: function () {},
    roundStart: function () {},
    roundEnd: function () {},
    happyTime: function () {},
    setDebug: function () {},
    setDebugTouchOverlayController: function () {},
    setPlayerAge: function () {},
    togglePlayerAdvertisingConsent: function () {},
    toggleNonPersonalized: function () {},
    setConsentString: function () {},
    logError: function () {},
    sendHighscore: function () {},
    destroyAd: function () {},
    getLeaderboard: function () {
      return Promise.resolve([]);
    },
    commercialBreak: function () {
      return Promise.resolve();
    },
    rewardedBreak: function () {
      // Donne les récompenses (clés, pièces) directement au joueur !
      return Promise.resolve(true);
    },
    displayAd: function () {
      return Promise.resolve();
    },
    getIsoLanguage: function () {
      return 'fr';
    }
  };

  window.PokiSDK = PokiMock;

  // Intercepteur du bridge Unity
  window.initPokiBridge = function (bridgeName) {
    console.log('[PokiSDK] initPokiBridge enregistré pour:', bridgeName);
    window.pokiBridge = bridgeName;
    window.pokiReady = true;

    if (window.unityGame && typeof window.unityGame.SendMessage === 'function') {
      try {
        window.unityGame.SendMessage(bridgeName, 'ready');
        console.log('[PokiSDK] Message "ready" transmis au moteur Unity !');
      } catch (err) {
        console.warn('[PokiSDK] Erreur SendMessage:', err);
      }
    }

    window.commercialBreak = function () {
      window.PokiSDK.commercialBreak().then(function () {
        if (window.unityGame && typeof window.unityGame.SendMessage === 'function') {
          window.unityGame.SendMessage(bridgeName, 'commercialBreakCompleted');
        }
      });
    };

    window.rewardedBreak = function () {
      window.PokiSDK.rewardedBreak().then(function (allowed) {
        if (window.unityGame && typeof window.unityGame.SendMessage === 'function') {
          window.unityGame.SendMessage(bridgeName, 'rewardedBreakCompleted', allowed ? 'true' : 'false');
        }
      });
    };
  };
})();
