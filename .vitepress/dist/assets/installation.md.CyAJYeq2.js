import{_ as e,c as a,o as t,a1 as o}from"./chunks/framework.1VJD570y.js";const f=JSON.parse('{"title":"Installation","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"installation.md","filePath":"installation.md"}'),s={name:"installation.md"},l=o('<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h3 id="requirements" tabindex="-1">Requirements: <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements:&quot;">​</a></h3><p><strong>PHP8.2+ (PHP8.3 default)</strong></p><p><strong>MySQL 5.7.10+ (MySQL 8 recommended)</strong></p><h2 id="installation-guide" tabindex="-1">Installation Guide <a class="header-anchor" href="#installation-guide" aria-label="Permalink to &quot;Installation Guide&quot;">​</a></h2><p>Please follow the installation steps below</p><ol><li><p>Please upload all the files &amp; folders to your server.</p></li><li><p>Please set the root path of domain/subdomain to <code>public</code> folder in your uploaded files and for subfolder, you need to redirect all traffic to <code>public</code> folder.</p><div class="danger custom-block"><p class="custom-block-title">Security Check</p><p>Please don’t allow web access to the folder in which you have uploaded files. Only <code>public</code> folder should be allowed in web access.</p></div></li><li><p>You can access the installer by adding <code>/install</code> at the end of your domain URL in browser.</p><blockquote><p><code>https://yourdomain.com/install</code></p></blockquote><blockquote><p><code>https://yourdomain.com/subfolder/install</code></p></blockquote><blockquote><p><code>https://subdomain.yourdomain.com/install</code></p></blockquote><div class="warning custom-block"><p class="custom-block-title">Download doesn&#39;t have install folder</p><p><code>install</code> is not a folder name but a route.</p></div></li><li><p>Please prepare these details (mentioned at installation step 1)</p></li><li><p>If installer give any <code>server error</code>, please check (step 3). You can check server error logs and the Laravel logs in the <code>storage/logs/</code> folder. If you are not sure, you can check with your server admin.</p></li><li><p>Please provide the details of your purchase, database, mail and user account (step 3).</p><blockquote><p>For purchase verification, the username is Envato username that you use to login to codecanyon.net and themeforest.net while the purchase code is in your license file, please download the license to get purchase code.</p></blockquote><blockquote><p>You can create database &amp; user at your server, if you are not sure please check with server admin.</p></blockquote></li><li><p>Finalize the installation (final step 4).</p></li></ol><h2 id="update-guide" tabindex="-1">Update Guide <a class="header-anchor" href="#update-guide" aria-label="Permalink to &quot;Update Guide&quot;">​</a></h2><h3 id="v4-to-the-latest" tabindex="-1">❌ V4 to the latest <a class="header-anchor" href="#v4-to-the-latest" aria-label="Permalink to &quot;:x: V4 to the latest&quot;">​</a></h3><blockquote><p><strong><em>You can&#39;t update v4 to v5 due to different database structure.</em></strong></p></blockquote><p>V5 is not completable with version 4, so please install version 5 and import the products, customers, and update settings to use the new version.</p><h3 id="v5-to-the-latest" tabindex="-1">✅ V5 to the latest <a class="header-anchor" href="#v5-to-the-latest" aria-label="Permalink to &quot;:white_check_mark: V5 to the latest&quot;">​</a></h3><p>Please backup <code> .env</code> file and then upload the latest files &amp; folders to replace the old ones then run the migration command as following</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># cd /path/to/upload/folder</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre></div><h2 id="faqs" tabindex="-1">FAQs <a class="header-anchor" href="#faqs" aria-label="Permalink to &quot;FAQs&quot;">​</a></h2><h3 id="can-t-access-install" tabindex="-1">Can&#39;t access /install <a class="header-anchor" href="#can-t-access-install" aria-label="Permalink to &quot;Can&#39;t access /install&quot;">​</a></h3><h4 id="why-i-can-t-access-the-install-route-in-browser" tabindex="-1">Why I can&#39;t access the <code>/install</code> route in browser? <a class="header-anchor" href="#why-i-can-t-access-the-install-route-in-browser" aria-label="Permalink to &quot;Why I can&#39;t access the `/install` route in browser?&quot;">​</a></h4><p>Please make sure that</p><ol><li>You have uploaded the file to correct folder.</li><li>The domain/subdomain root path has been set correctly to <code>public</code> folder.</li><li>If you are installing in subfolder then make sure you are forwarding the traffic to <code>public</code> folder.</li><li>Check that <code>mod_rewrite</code> is enabled and configured to use the <code>.htaccess</code> file from site folder.</li><li>Make sure that you server meets the php and mysql requirements mention above.</li></ol><h3 id="white-page-at-install" tabindex="-1">White page at /install <a class="header-anchor" href="#white-page-at-install" aria-label="Permalink to &quot;White page at /install&quot;">​</a></h3><h4 id="why-i-see-nothing-on-install-route-but-blank-white-page" tabindex="-1">Why I see nothing on <code>/install</code> route but blank White page? <a class="header-anchor" href="#why-i-see-nothing-on-install-route-but-blank-white-page" aria-label="Permalink to &quot;Why I see nothing on `/install` route but blank White page?&quot;">​</a></h4><p>Please check your server error logs for details. You can check Laravel logs in the <code>storage/logs/</code> folder too. Once you have the error details, please ask question at support portal <a href="https://tecdiary.net/support" target="_blank"><a href="https://tecdiary.net/support" target="_blank" rel="noreferrer">https://tecdiary.net/support</a></a></p><h2 id="support" tabindex="-1">Support <a class="header-anchor" href="#support" aria-label="Permalink to &quot;Support&quot;">​</a></h2><p>Each purchase comes with free six months support. If you need assistance, please validate your purchase code at support portal <a href="https://tecdiary.net/support" target="_blank"><a href="https://tecdiary.net/support" target="_blank" rel="noreferrer">https://tecdiary.net/support</a></a> and ask question there.</p>',24),i=[l];function n(r,c,d,h,p,u){return t(),a("div",null,i)}const m=e(s,[["render",n]]);export{f as __pageData,m as default};
