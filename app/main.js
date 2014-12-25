// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery", "huahua", "phodal", "propose"], function($, huahua, phodal, propose) {
  //while(propose.times < 99) {
    huahua.listen(phodal.ask("will")("you")("marry")("me"));
    huahua.reply.propose();
  //}
  huahua.propose("Yes");
  var ever = phodal.love(huahua) && huahua.love(phodal);
  for(ever;;);
});
