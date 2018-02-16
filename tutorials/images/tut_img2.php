<img class="img-responsive" id="myImg2" src="tutorials/images/tut_img2.PNG" alt="" >
<!-- The Modal -->
<div id="myModal2" class="modal">
  <!-- The Close Button -->
  <span class="close2">&times;</span>
  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img02">
  <!-- Modal Caption (Image Text) -->
  <div id="caption2"></div>
</div>


<script type="text/javascript">
$(document).ready(
function(){
// Get the modal
var modal = document.getElementById('myModal2');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[0];
  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    }
    );
    </script>