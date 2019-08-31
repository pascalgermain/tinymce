declare let tinymce: any;

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'link code',
  toolbar: 'link code',
  menubar: 'view insert tools custom',
  // link_quicklink: true,
  // link_list: [
  //   {title: 'My page 1', value: 'https://www.tiny.cloud'},
  //   {title: 'My page 2', value: 'https://about.tiny.cloud'}
  // ],
  browser_spellcheck: true,
  link_context_toolbar: true,
  link_title: false,
  link_assume_external_targets: true,
  default_link_target: '_blank',
  target_list: false,
  relative_urls: false,
  menu: {
    custom: { title: 'Custom', items: 'link unlink openlink' }
  },
  height: 600,
  setup: (ed) => {
    ed.on('init', () => {
      ed.setContent('<h1>Heading</h1><p><a name="anchor1"></a>anchor here.');
    });
  }
});

export {};
