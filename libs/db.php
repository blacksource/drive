<?
//连接到本地mysql数据库
$myconn=mysql_connect("localhost","root","hhhhhh88");
//选择test为操作库
// mysql_query("set names 'utf8'"); // //这就是指定数据库字符集，一般放在连接数据库后面就系了
mysql_select_db("drive",$myconn);

?>