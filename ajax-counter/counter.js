jQuery(document).ready(function() {
  jQuery.ajax({
    url: '/ajax-counter/counter.php', // counter.php への絶対パス．
    cache: false,
    dataType: 'json',
    success: function(res) {
      // アクセス数の出力フォーマットは append() 内で定義している．
      jQuery(".counter").append('あなたは'+res.total+'人目の優秀嵯峨野生です！');
    }
  });
});
