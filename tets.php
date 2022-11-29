<h2>Pengurutan</h2>
<table border="1" width="500px">      
 
<?php
require_once('koneksi.php');
$query1="select * from mahasiswa order by nim ";
 
$pola='asc';
$polabaru='asc';
if(isset($_GET['orderby'])){
  $orderby=$_GET['orderby'];
  $pola=$_GET['pola'];
   
  $query1="SELECT * FROM  mahasiswa order by $orderby $pola ";
  if($pola=='asc'){
    $polabaru='desc';
     
  }else{
    $polabaru='asc';
  }
}
?>
<th>
        <td><a href='mahasiswa2.php?orderby=nim&pola=<?=$polabaru;?>'>Nim</a></td>
        <td><a href='mahasiswa2.php?orderby=nama&pola=<?=$polabaru;?>'>Nama</a></td>
        <td>IPK</td><td>Jurusan</a></td>
</th>
         
<?php
//query database 
$result=mysql_query($query1) or die(mysql_error());
$no=1; //penomoran 
 
 
while($rows=mysql_fetch_object($result)){
      ?>
      <tr>
        <td><?php echo $no
        ?></td>
        <td><?php    echo $rows -> nim;?></td>
        <td><?php    echo $rows -> nama;?></td>
        <td align='right'><?php    echo $rows -> ipk;?></td>
        <td><?php    echo $rows -> jurusan;?></td>
      </tr>
      <?php
$no++;
}?>
    </table>









<h2>Pencarian Data</h2>
<form action='mahasiswa2.php'method="POST">
  <input type='text' value='' name='qcari'>
  <input type='submit' value='cari'>
   <a href='mahasiswa2.php' >All</a>
</form>
 
    <table border="1" width="500px">
      <th>
        <td>Nim</a></td>
        <td>Nama</td>
        <td>IPK</td>
        <td>Jurusan</td>
    </th>
 
<?php
require_once('koneksi.php');
$query1="select * from mahasiswa ";
 
 
if(isset($_POST['qcari'])){
  $qcari=$_POST['qcari'];
  $query1="SELECT * FROM  mahasiswa 
  where nim like '%$qcari%'
  or nama like '%$qcari%'  ";
}
 
$result=mysql_query($query1) or die(mysql_error());
$no=1; //penomoran 
while($rows=mysql_fetch_object($result)){
      ?>
      <tr>
        <td>
        <?php echo $no;
        ?>
        </td>
        <td><?php    echo $rows -> nim;?></td>
        <td><?php    echo $rows -> nama;?></td>
        <td align='right'><?php    echo $rows -> ipk;?></td>
        <td><?php    echo $rows -> jurusan;?></td>
      </tr>
      <?php
        $no++;
    }?>
    </table>