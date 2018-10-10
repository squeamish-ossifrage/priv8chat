/*                                    .,.
                                ,nMMMMMMb.
                     .,,,.     dP""""MMMMMb            -
                  .nMMMMMMMn. `M     MMMMMM>
                 uMMMMMMMMMMMb Mx   uMMMMMM   . .,,.
                 MMMMMMP" '"4M.`4MMMMMMMMM' ?J$$$$ccc"=
                 MMMMMM     4M'  "4MMMMP" z$c,"?$c,""$c$h=
                 "MMMMMb,..,d' hdzc   ,cc$$$$$$$$$$L.$c "
     c"`          `4MMMMMMP" ,$$$$$$c,$$$$$$$$$$$$"?? ,c?$.
                 ,cc,.  .,zc$$$$$3?$?$P"?  " "  "    $$$$h`           -
              ,c$$$", c$$$$$$$$PP                   ,$$$$$c
              )$$$$$$$P"$$$$$"  "                   $c,"$c/     *
    '       ,cc$$$$$"".d$?? "                      J$$hc$=
           ,c" d$$??c="         '!!               z$$$$$??
=         `??-$""? ?"             '   .          d$$$""$ccc
            =`" "        "                     ,d$$$$P $$$"-
              d$$h.        ,;!               ,d$$$$P" .$$$h.     =
             .         !> -$$$$$P zd$$$""$.
              " "$" $c  !  `!,!'!;,,;!--!!!! `$$P .d$$$$$h $c"
                 $ d$".`!!  `'''`!!!!    !!,! $C,d$$$$$$$$.`$-
        "        $."$ '  ,zcc=cc ``'``<;;!!!> $?$$$$$$$$"$$F"
                 "=" .J,??"" .$",$$$$- '!'!!  $<$$$$$$$$h ?$=.
                 ".d$""",chd$$??""""".r >  !'.$?$$$$$$$$"=,$cc,      #
               ,c$$",c,d$$$"' ,c$$$$$$"'!;!'.$F.$$$$$$$$. $$$."L
              d $$$c$$$$$" ,hd$$$$??" z !!`.P' `$$$$$$$?? $$$P ..
           ,cd J$$$$$$$P',$$$$$$".,c$$" `.d$h h $$$$$$P"?.?$$ ,$$""
          c$$' $$$$$$$C,$$$$$$"',$$$P"z $$$$"-$J"$$$$$ ,$$?$F.$L?$$L
         ,$",J$$$$$$$$$$$$$$"  ,$$$C,r" $$$$$$$"z$$$$$$$$$,`,$$"d$$??
        .dF $$$$$$$$$$$$$$P" $$$$$$$F.-,$$$$$$$$$$$$$$$$$$$%d$$F$$$$cc,-
       ,$( c$$$$$$$$$$$$$$h,c$$$$$$c=".d$$   """',,.. .,.`""?$$$$$$.`?c .
       d$$.$$$$$$$$$$$$$$$$$$$P""P" ,c$$$$$c,"=d$$$$$h."$$$c,"$$$$$$. $$c
      $$$$$$$$$$$$$$$$$$$$$P"",c"  ,$$$$$$$$$h. `?$$$$$$$$$$P'.""`?$$.3$cr
    z$$$$$$$$$ 3?$$$$$$$$$ccc$P   ,$$$$$$$$$$$$$h.`"$$$$$$$$$c?$c .`?$$$$c
  dd$$"J$$$$$$$P $$$$$$$$F?$$$" .d$$$$$$$$$$$$$$$$L.`""???$$$$$$$$$c  ?$C?
 c$$$$ $$3$$$$$$ `$$$$$h$$P"".. $$$$$$$$$$$$$$$??""" ,ccc3$$$$$$$$$ hL`?$C
h$$$$$>`$$$$$$$$$.$$$$$??',c$"  $$$$$P)$$$$$P" ,$$$$$$$$$$$$$$$$$$$ "$ ."$
$$$$$$h.$C$$$$$$$$$$$ccc$P"3$$ ,$$$$$ "$$$P" =""',d$$???""',$$$$$$$$ $cc "
$$$$$$$$$$$$$$$$P$$?$$$.,c??",c$$$$$L$J$P"  zchd$$$$,ccc$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$3$$$F" c$$$$$$$$$$  ,cc$$$$$$P"""""`"""??$$$$$$$$$$$P/
$$$$$$$$$$$$$$$??)$$$JC".d$$4?$$$$$$$$$c .,c=" .,,J$$$$$$$$hc,J$$$$$$$$$$%
$$$$$$$$$$$$"".,c$$$$CF $$$h"d$$$$$$$$$h "',cd$????$$$$$$$$$$$$$$$$$$$$$$z
$$$$$$$$$P??"3$$P??$$" ,$$$FJ?$$$$$$$$$$cc,,. ,,.  =$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$hc$$$$$r$P"'  $$$$."-3$$$$$$$$$$$$$"$"$$$c, ""????$$$$$$$$$$$$$$$
$$$$$3$$$$$$$h.zccc$$ ,$$$$L`,$$$$$$$$$$$$$L,"- $$$$$cc -cc??)$$$$$$$$$$$$

EU cookie law requires that all visitors consent to the use of cookies.
(Code based on https://gist.github.com/johnchambers/5a6e67f2d7d39031af17)
*/

jQuery(function($) {

    checkCookie_eu();

    function checkCookie_eu()
    {

        var consent = getCookie_eu("cookies_consent");

        if (consent == null || consent == "" || consent == undefined)
        {
            // show notification bar
            $('#cookie_directive_container').show();
        }

    }

    function setCookie_eu(c_name,value,exdays)
    {

        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie = c_name + "=" + c_value+"; path=/";

        $('#cookie_directive_container').hide('slow');
    }


    function getCookie_eu(c_name)
    {
        var i,x,y,ARRcookies=document.cookie.split(";");
        for (i=0;i<ARRcookies.length;i++)
        {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==c_name)
            {
                return unescape(y);
            }
        }
    }

    $("#cookie_accept a").click(function(){
        setCookie_eu("eu_cookie", "accept", 1461);
    });

});
