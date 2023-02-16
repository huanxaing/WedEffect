/**
 * Created by Administrator on 14-5-14.
 */
var mgang = {
    s2bColId : 0,
    s2bColLiIdPreix : 0,
    s2bRadius : 0,
    s2bColLiRowMargin : 0,
    s2bLiBorderColor : 0,
    s2bLiAlign : 0
}

jQuery.fn.extend({
    small2big : function(options){
       var defaults = {
           s2bColId : $(this).attr("id"),
           s2bColLiIdPreix : "s2b_col_li",
           s2bRadius : 40,
           s2bColLiRowMargin : 0,
           s2bLiBorderColor : "white",
           s2bLiAlign : "L" //level 水平，V -vertical 垂直

       }
       var option = $.extend(defaults,options);
       mgang.s2bColId = "#" + option.s2bColId;
       mgang.s2bColLiIdPreix = "#" + option.s2bColLiIdPreix;
       mgang.s2bRadius = option.s2bRadius;
       mgang.s2bColLiRowMargin = option.s2bColLiRowMargin;
       mgang.s2bLiBorderColor = option.s2bLiBorderColor;
       mgang.s2bLiAlign = option.s2bLiAlign;
       return $(this);
    },
    initS2bCol : function(){
        $(mgang.s2bColId + " li").each(function(index,domObj){
            $(this).attr("id",mgang.s2bColLiIdPreix + (index + 1)).css({
                "borderColor" : mgang.s2bLiBorderColor,
                "backgroundImage" : "url(images/" + (index + 1) + ".jpg)",
                "backgroundPosition" : "center"
            });

            if(mgang.s2bLiAlign == "V"){
                $(this).css({
                    "top" : index * (parseInt($(this).css("height")) + mgang.s2bColLiRowMargin)
                });
            }else{
                $(this).css({
                    "left" : index * (parseInt($(this).css("width")) + mgang.s2bColLiRowMargin)
                });
            }
        });
        return $(this);
    },
    addS2bFunction : function(){
        $(mgang.s2bColId + " li").on("mouseover",function(){
            console.info("mouseover ul li : " + $(this).html());
            //动画地增加宽高个40px
            $(this).animate({
                width : "+=" + mgang.s2bRadius,
                height: "+=" + mgang.s2bRadius,
                left : "-=" + mgang.s2bRadius/2,
                top : "-=" + mgang.s2bRadius/2,
                zIndex : "+=1"
            },100).css("border-radius",(parseInt($(this).css("width")) + mgang.s2bRadius/2));
        }).on("mouseout",function(){
            $(this).animate({
                width : "-=" + mgang.s2bRadius,
                height: "-=" + mgang.s2bRadius,
                left : "+=" + mgang.s2bRadius/2,
                top : "+=" + mgang.s2bRadius/2
            },100).animate({
                width : "+=10px",
                height : "+=10px",
                left : "-=5px",
                top : "-=5px"
            },60).animate({
                width : "-=10px",
                height : "-=10px",
                left : "+=5px",
                top : "+=5px",
                zIndex: "-=1"
            },60);
        });
        return $(this);
    }
});
