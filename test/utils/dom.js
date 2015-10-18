export default function dom (jsdom) {
  global.document = jsdom.jsdom();
  global.window = global.document.defaultView;
  global.navigator = global.window.navigator;

  return {
    document: global.document,
    window: global.window,
    navigator: global.navigator
  };
};
