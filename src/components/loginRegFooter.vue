<template>
  <div class="n-footer">
    <div class="nf-link-area clearfix">
      <ul>
        <li>
          <a href="javascript:void(0)" class="current">简体</a>|
        </li>
        <li>
          <a href="javascript:void(0)">繁体</a>|
        </li>
        <li>
          <a href="javascript:void(0)">English</a>|
        </li>
        <li>
          <a href="javascript:void(0)">常见问题</a>|
        </li>
        <li>
          <a href="javascript:void(0)">隐私政策</a>
        </li>
      </ul>
    </div>
    <p class="nf-intro">
      小米公司版权所有-京ICP备10046444-
      <a class="beian-record-link" href="javascript:void(0)">
        <span>
          <img
            src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
          />
        </span>京公网安备11010802020134号
      </a>-京ICP证110507号
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.n-footer {
  background: #fff;
  margin-top: 0;
  height: 80px;
  padding-top: 100px;
  position: relative;
  z-index: 4;
  text-align: center;
}
.nf-link-area {
  text-align: center;
}
.nf-intro {
  padding: 10px;
}
.nf-link-area li {
  display: inline-block;
}
.nf-link-area a {
  display: inline-block;
  padding: 0 10px;
  color: #757575;
}
.nf-link-area a:hover,
.nf-link-area a.current {
  color: #333;
}
</style>