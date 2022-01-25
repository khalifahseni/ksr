
function bendBottomCorner(){$(".flip-card:not(.builderCard)").each(function(){$(this).addClass("builderCard")})}var isBuilder=$("html").hasClass("is-builder");if(isBuilder)$(document).on("add.cards",function(){0!=$(".flip-card").length&&bendBottomCorner()});
