<img class="img-responsive" id="myImg4" src="tutorials/images/tut_img4.PNG" alt="" >
<!-- The Modal -->
<div id="myModal4" class="modal" >
  <!-- The Close Button -->
  <span class="close4">&times;</span>
  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img04">
  <!-- Modal Caption (Image Text) -->
  <div id="caption4"></div>
</div>


<script type="text/javascript">
$(document).ready(
function(){
// Get the modal
var modal = document.getElementById('myModal4');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg4');
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption4");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close4")[0];
  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    }
    );
    </script>