<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <?php
        include "../connect/connect.php";

        $sql = "SELECT * FROM myComment";
        $result = $connect -> query($sql);
    
        // echo "<pre>";
        // var_dump(mysqli_fetch_array($result));
        // echo "</pre>";

        while($info = mysqli_fetch_array($result)){
            ?>
            <div>
              <span><?=$info['youText']?></span>
              <span><?=$info['youName']?></span>
              <span><?=date('Y-m-d',$info['regTime'])?></span>

            </div>
     <?php   }
        ?>
    </div>
    <form action="commentSave.php" method="post" name="commentForm">
        <input type="text" name="comment" id="comment" placeholder="댓글을 적어주세요!">
        <input type="text" name="name" id="name" placeholder="이름을 적어주세요!">
        <button type="submit">입력하기</button>
    </form>
    
</body>
</html>