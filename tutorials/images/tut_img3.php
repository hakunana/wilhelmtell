<img class="img-responsive" id="myImg3" src="tutorials/images/tut_img3.PNG" alt="" >
<!-- The Modal -->
<div id="myModal3" class="modal">
  <!-- The Close Button -->
  <span class="close3">&times;</span>
  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img03">
  <!-- Modal Caption (Image Text) -->
  <div id="caption3"></div>
</div>


<script type="text/javascript">
$(document).ready(
function(){
// Get the modal
var modal = document.getElementById('myModal3');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close3")[0];
  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    }
    );
    </script>