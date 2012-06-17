<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <? include("public/head.html") ?>
</head>
<body>
	<div id="overall">
    	<? include("public/header.html") ?>
		
		<div id="left">
			<div id="nul">
				<h2 class="h"><span>政策法规</span></h2>
				<ul class="menu">
				</ul>
			</div>
			<? include("public/connection.html") ?>	
		</div>

		<div id="right">
			<h2>政策法规</h2>
			<div id="web_content">
				<ul id="web_new">
	                <?
	                    include("libs/db.php");
	                    $strSql="select * from news where type='policies' order by created_at desc";
	                    $result=mysql_query($strSql,$myconn);
	                    while($row=mysql_fetch_array($result))
	                    {
	                ?>
	                    <li>
	                        <a href="/policies/?id=<?=$row['id']?>"><span class="time"><?=$row['created_at']?></span><?=$row["title"]?></a>
	                    </li>
	                <?
	                    }
	                    mysql_close($myconn);
	                ?>
	                </ul>
			</div>
		</div>


    	<? include('public/footer.html') ?>

	</div>
</body>