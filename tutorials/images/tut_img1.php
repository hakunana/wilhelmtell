<img class="img-responsive align-bottom" id="myImg1" src="tutorials/images/tut_img1.PNG" alt="" >
<!-- The Modal -->
<div id="myModal1" class="modal">
  <!-- The Close Button -->
  <span class="close">&times;</span>
  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">
  <!-- Modal Caption (Image Text) -->
  <div id="caption1"></div>
</div>


<script type="text/javascript">
$(document).ready(
function(){
// Get the modal
var modal = document.getElementById('myModal1');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    }
    );
    </script>