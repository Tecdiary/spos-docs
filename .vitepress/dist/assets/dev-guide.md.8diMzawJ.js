import{_ as e,c as a,o as i,a1 as s}from"./chunks/framework.1VJD570y.js";const k=JSON.parse('{"title":"Developer Guide","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"dev-guide.md","filePath":"dev-guide.md"}'),o={name:"dev-guide.md"},n=s('<h1 id="developer-guide" tabindex="-1">Developer Guide <a class="header-anchor" href="#developer-guide" aria-label="Permalink to &quot;Developer Guide&quot;">​</a></h1><p>SimplePOS v5 id developed using Laravel, Inertiajs &amp; Vuejs. The main page contents can be changed by editing <code>app/Http/Controllers/HomeController.php</code></p><h2 id="code-modifications" tabindex="-1">Code Modifications <a class="header-anchor" href="#code-modifications" aria-label="Permalink to &quot;Code Modifications&quot;">​</a></h2><p>You can modify the PHP (Laravel) code as you need. If you modify the front-end code (Vuejs), Javascript <code>resources/js/</code> you will need to rebuild the app using <code>npm run build</code> after installing the dependencies with <code>npm i</code></p><p>For development, you can use <code>npm run dev</code> and once all modifications done build the production version with <code>npm run build</code> before deploying to your server.</p><h4 id="laravel" tabindex="-1">Laravel <a class="header-anchor" href="#laravel" aria-label="Permalink to &quot;Laravel&quot;">​</a></h4><p>You can find the Laravel docs at <a href="https://laravel.com/docs" target="_blank"><a href="https://laravel.com/docs" target="_blank" rel="noreferrer">https://laravel.com/docs</a></a></p><h4 id="inertiajs" tabindex="-1">Inertiajs <a class="header-anchor" href="#inertiajs" aria-label="Permalink to &quot;Inertiajs&quot;">​</a></h4><p>You can find the Inertia docs at <a href="https://inertiajs.com/" target="_blank"><a href="https://inertiajs.com/" target="_blank" rel="noreferrer">https://inertiajs.com/</a></a></p><h4 id="vuejs" tabindex="-1">Vuejs <a class="header-anchor" href="#vuejs" aria-label="Permalink to &quot;Vuejs&quot;">​</a></h4><p>You can find the Vuejs docs at <a href="https://vuejs.org/guide" target="_blank"><a href="https://vuejs.org/guide" target="_blank" rel="noreferrer">https://vuejs.org/guide</a></a></p><p>The vuejs app code is in the <code>resources/js/</code> folder. The page views are in the <code>resources/js/Pages/</code> folder while the layout files are in the &#39;<code>resources/js/Layouts/</code>&#39;</p><p>The helping file/functions are in the <code>resources/js/Core/</code> folder while the side bar menus are defined in the <code>resources/js/Core/menu.js</code> file.</p><h2 id="adding-language" tabindex="-1">Adding Language <a class="header-anchor" href="#adding-language" aria-label="Permalink to &quot;Adding Language&quot;">​</a></h2><p>You can add language by following these steps.</p><ol><li>Duplicate <code>lang/en.json</code> and <code>lang/en/</code> to your language then translate</li><li>Edit <code>lang/languages.json</code> and add your language entry</li><li>Build the application <code>npm i &amp;&amp; npm run build</code></li></ol><h2 id="setup-cron-job" tabindex="-1">Setup CRON Job <a class="header-anchor" href="#setup-cron-job" aria-label="Permalink to &quot;Setup CRON Job&quot;">​</a></h2><p>As you know that SimplePOS is developer using Laravel. So, when using Laravel&#39;s scheduler, we only need to add a single cron configuration entry to our server that runs the <code>schedule:run</code> command every minute.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> php /path/to/upload/folder/artisan schedule:run </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /dev/null </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;&amp;1</span></span></code></pre></div><h4 id="running-locally" tabindex="-1">Running locally <a class="header-anchor" href="#running-locally" aria-label="Permalink to &quot;Running locally&quot;">​</a></h4><p>The command below will run in the foreground and invoke the scheduler every minute until you terminate the command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> schedule:work</span></span></code></pre></div><h2 id="queue-configuration" tabindex="-1">Queue Configuration <a class="header-anchor" href="#queue-configuration" aria-label="Permalink to &quot;Queue Configuration&quot;">​</a></h2><p>Laravel allows you to easily create queued jobs that may be processed in the background. By moving time intensive tasks to a queue, your application can respond to web requests with blazing speed and provide a better user experience for you and your customers.</p><p>Laravel&#39;s queue configuration options are stored in your application&#39;s config/queue.php configuration file. You can set <code>QUEUE_CONNECTION</code> in the <code>.env</code> file. You can setup one of the following drivers:</p><p><code>sync, database, beanstalkd, sqs, redis</code></p><p>On cPanel you can add <code>QUEUE_ENABLE=false</code> in your .env file and setup the cron job as following</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/upload/folder/artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> queue:work</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --stop-when-empty</span></span></code></pre></div><h4 id="running-locally-1" tabindex="-1">Running locally <a class="header-anchor" href="#running-locally-1" aria-label="Permalink to &quot;Running locally&quot;">​</a></h4><p>The command below will start a queue worker and process new jobs as they are pushed onto the queue.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> queue:work</span></span></code></pre></div><p>Note that once the <code>queue:work</code> command has started, it will continue to run until it is manually stopped or you close your terminal.</p><hr><div class="warning custom-block"><p class="custom-block-title">Modify item code at your own risk</p><p>We don&#39;t offer support for modifications and modified versions. You are allowed to modify the item code as per license at your own risk.</p></div>',34),t=[n];function l(r,d,h,p,c,u){return i(),a("div",null,t)}const m=e(o,[["render",l]]);export{k as __pageData,m as default};