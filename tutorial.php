<!DOCTYPE html>
<html lang="en">
<?php include("includes/head.html");?>
	<body>
	  	<div id="full-content" class="container-fluid">
			<section class ="intro">
				<?php include("includes/navigation.html");?>
			</section>
		</div>
		<div class="container-fluid tutorialcontent">
			<!-- This should always position the first page of the tutorial section. Subsections and other added sections can be linked within /create.html or other subpages -->

		    <?php include("tutorials/create.php");?>
		</div>
	    
	    <?php include("includes/footer.html");?>

	    <script type="text/javascript">
	    	$('#tutorials').addClass("active");
		</script>
	</body>
</html>