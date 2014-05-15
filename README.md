functionalBlocks v1.0 
================

All Blocks  http://plugins.arabirim.com.tr/functionalBlocks/

Left Block http://plugins.arabirim.com.tr/functionalBlocks/leftBlock.html

Right Block http://plugins.arabirim.com.tr/functionalBlocks/rightBlock.html
 
Header Block http://plugins.arabirim.com.tr/functionalBlocks/headerBlock.html


http://www.aycan.net/functionalblocks/

How to use
================

import to document functionalBlocks.css, functionalBlocks.js 


Example
================

@import

<pre>
   &lt;link type="text/css" rel="stylesheet" href="library/css/functionalBlocks.css"/&gt;
   &lt;script src="library/js/functionalBlocks.js"/&gt;&lt;/script/&gt;
</pre>
<h4>@html objects</h4>
<pre>
   &lt;div class="headerBlock"&gt; Header &lt;/div&gt;
   &lt;div class="leftBlock h100"&gt;
       &lt;div class="headerClone"&gt;&lt;/div&gt;
       Left
   &lt;/div&gt;
   
   &lt;div class="contentBlock h100"&gt;
       &lt;div class="headerClone"&gt;&lt;/div&gt;
   &lt;/div&gt;
   &lt;div class="rightBlock h100"&gt;
       &lt;div class="headerClone"&gt;&lt;/div&gt;
       Right
   &lt;/div&gt;
</pre>

<h4>@trigger</h4>
<pre>
   &lt;button onclick="blockClose( 'leftHidden' );"&gt; Left Open / Close &lt;/button&gt;
   &lt;button onclick="blockClose( 'headerHidden' );"&gt; Header Open / Close &lt;/button&gt;
   &lt;button onclick="blockClose( 'rightHidden' );"&gt; Right Open / Close &lt;/button&gt;
</pre>
<h4>Powered by</h4>
<p>
<a href="http://www.twitter.com/arabirimcomtr" target="_blank">@arabirimcomtr</a>
&  
<a href="http://www.twitter.com/AycanB" target="_blank">@AycanB</a>
</p>
