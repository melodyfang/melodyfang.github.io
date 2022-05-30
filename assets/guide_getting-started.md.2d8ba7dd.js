import{_ as n,c as a,o as s,a as t}from"./app.c7288d98.js";const f='{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md"}',p={},e=t(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u5148\u5C1D\u8BD5\u521D\u59CB\u5316\u4E00\u4E2A\u6700\u7B80\u5355\u7684 GkPlayer</p><p>\u5728 vue \u7EC4\u4EF6\u91CC\u521D\u59CB\u5316:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GkPlayer</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>player<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{...videoConfig}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>GkPlayer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> GkPlayer <span class="token keyword">from</span> <span class="token string">&#39;GkPlayer&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    GkPlayer
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">videoConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>videoConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&#39;https://media001.geekbang.org/6c1d5b4c18e84d8787d814de82037982/snapshots/5cfeb1367b3e4c3b954fca20e13efbc8-00005.jpg&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Hls</span><span class="token operator">:</span> window<span class="token punctuation">.</span>Hls<span class="token punctuation">,</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;https://media001.geekbang.org/dd0f0f11940f4e73b7ef171bf1bb75e5/abbe364597044e1b8f0d14562bf7ac42-592fa3e75b55bce06ec0ea336435cd43-ld.m3u8&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">primaryColor</span><span class="token operator">:</span> <span class="token string">&#39;#5C86FF&#39;</span> <span class="token comment">// \u64AD\u653E\u5668\u4E3B\u9898\u8272\uFF08\u9ED8\u8BA4 #FA8919\uFF09</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E00\u4E2A\u6700\u7B80\u5355\u7684 GkPlayer \u5C31\u521D\u59CB\u5316\u597D\u4E86\uFF0C\u5B83\u53EA\u6709\u6700\u57FA\u672C\u7684\u89C6\u9891\u64AD\u653E\u529F\u80FD</p>`,5),o=[e];function c(l,r,u,k,i,d){return s(),a("div",null,o)}var y=n(p,[["render",c]]);export{f as __pageData,y as default};
