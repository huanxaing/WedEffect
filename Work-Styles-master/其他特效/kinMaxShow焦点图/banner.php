	<div id="kinMaxShow">
    	<volist name="flash" id="vo">
    	<div>
        	<a href="{$vo.link}" target="_blank"><img src="__ROOT__/__UPLOAD__/{$vo.img}" alt="{$vo.title}"/></a>
        </div>
		</volist>
    </div>


        <script>
        $(function(){

            $("#kinMaxShow").kinMaxShow({
                height:446,             
                intervalTime:6,
                easing:"linear",
                button:{
                        switchEvent:'mouseover',
                        showIndex:false,
                        normal:{width:'14px',height:'14px',lineHeight:'14px',background:"#cccaca",border:"1px solid #ffffff",color:"#666666",marginRight:'8px',marginBottom:'16px'},
                        focus:{background:"#CC0000",border:"1px solid #FF0000",color:"#000000"}
                }
            });
        });
        </script>