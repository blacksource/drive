<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <? include("public/head.html") ?>
</head>
<body>
	<div id="overall">
    	<? include("public/header.html") ?>
		
        <div id="left">
            <div id="nul">
                <h2 class="h"><span>新闻动态</span></h2>
                <ul class="menu">
                </ul>
            </div>
            <? include("public/connection.html") ?>
        </div>

        <div id="right">
            <h2>新闻动态
            </h2>
            <div id="web_content">
                <ul id="web_new">
                <?
                    include("libs/db.php");
                    $strSql="select * from news where type='news' order by created_at desc";
                    $result=mysql_query($strSql,$myconn);
                    while($row=mysql_fetch_array($result))
                    {
                ?>
                    <li>
                        <a href="/news/?id=<?=$row['id']?>"><span class="time"><?=$row['created_at']?></span><?=$row["title"]?></a>
                    </li>
                <?
                    }
                    mysql_close($myconn);
                ?>
                </ul>
            </div>
            <!--
            <div id="pagelist">
                <ul>
                    <li>1/12页/233</li>
                    <li id="this"><a href="/xwdt/p1.html">1</a></li>
                    <li><a href="/xwdt/p2.html">2</a></li>
                    <li><a href="/xwdt/p3.html">3</a></li>
                    <li><a href="/xwdt/p4.html">4</a></li>
                    <li><a href="/xwdt/p5.html">5</a></li>
                    <li><a href="/xwdt/p2.html">下一页</a></li>
                    <li><a href="/xwdt/p12.html">尾页</a></li>
                </ul>
            </div>
            -->
        </div>

    	<? include('public/footer.html') ?>

	</div>
</body>