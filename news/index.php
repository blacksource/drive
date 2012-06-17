<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <? include("../public/head.html") ?>
</head>
<body>
	<div id="overall">
    	<? include("../public/header.html") ?>
		
        <div id="left">
            <div id="nul">
                <h2 class="h"><span>新闻动态</span></h2>
                <ul class="menu">
                </ul>
            </div>
            <? include("../public/connection.html") ?>
        </div>

        <div id="right">
            <h2><span>您所在的位置是:<a href="#"> &gt; </a><a href="/xwdt/p1.html">新闻动态</a></span> 新闻动态</h2>
            <div id="web_content">
                <div class="view">
                <?
                    $id = $_GET['id'];
                    include("../libs/db.php");
                    $strSql="select id,title,context,created_at from news where id = ".$id;
                    $result=mysql_query($strSql,$myconn);
                    $row=mysql_fetch_row($result);
                ?>
                    <h1><?=$row[1]?></h1>
                    <div class="time">发布日期：<?=$row[3]?></div>
                    <div class="content">
                        <?=$row[2]?>
                    </div>
                    <!--
                    <div class="next">上一条：
                        <a href="/xwdt/282.html">长沙代驾公司告诉你&amp;自动挡驾驶技巧</a><br>
                        下一条：
                    </div>
                    -->
                <?
                    mysql_close($myconn);
                ?>    
                </div>
            </div>
        </div>

    <? include('../public/footer.html') ?>

	</div>
</body>