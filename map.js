// jQuery Tooltip Start //

$description = $(".description");

  $('.enabled').hover(function() {
    
    $(this).attr("class", "enabled");
    $description.addClass('active');
    $description.html($(this).attr('name'));
  }, function() {
    $description.removeClass('active');
  });

$(document).on('mousemove', function(e){
  
  $description.css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
});

// jQuery Tooltip End //

// Zoom + Pan to State Start //

var transformMatrix = [1, 0, 0, 1, 0, 0];
var svg = document.getElementById('svg');
var viewbox = svg.getAttributeNS(null, "viewBox").split(" ");
var centerX = parseFloat(viewbox[2]) / 2;
var centerY = parseFloat(viewbox[3]) / 2;
var matrixGroup = svg.getElementById("matrix-group");
var isZoomed = false;
var isPanned = false;
var buttonWrapper = document.querySelector('.refreshDiv');
var zoomedState = '';
var clickedState = '';

function zoomIn(scale) {
    for (var i = 0; i < 4; i++) {
        transformMatrix[i] *= scale;
    }
    transformMatrix[4] += (1 - scale) * centerX;
    transformMatrix[5] += (1 - scale) * centerY;        
    var newMatrix = "matrix(" +  transformMatrix.join(' ') + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);
    buttonWrapper.classList.remove('hide');
} 

function zoom(scale) {
    if (zoomedState != clickedState && isZoomed != false) {
        var updatedZoomedState = clickedState;
        refreshPage();
        zoomIn(scale);
        zoomedState = updatedZoomedState;
        isZoomed = true;
        document.getElementById(zoomedState).style = 'fill: #4d79ff;';
    } else if (isZoomed === false) {
        zoomIn(scale);
        isZoomed = true;
    }
  }

function panMap(dx, dy) {
    transformMatrix[4] += dx;
    transformMatrix[5] += dy;
    var newMatrix = "matrix(" +  transformMatrix.join(' ') + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);
};

function pan(dx, dy) {   
    if (zoomedState != clickedState && isPanned != false) {
        refreshPage();
        panMap(dx, dy);
        isPanned = true;
    } else if (isPanned === false) {
        panMap(dx, dy);
        isPanned = true;
    }
  }

// Zoom + Pan to State End //

// Reset Full Map Start //

function refreshPage() {
    document.getElementById(zoomedState).style = 'fill: #b3b3b3;';
    transformMatrix = [1, 0, 0, 1, 0, 0]
    matrixGroup.setAttributeNS(null, "transform", "matrix(" +  transformMatrix.join(' ') + ")");
    isZoomed = false;
    isPanned = false;
    zoomedState = '';
    clickedState = '';
    buttonWrapper.classList.add('hide');
};

// Reset Full Map End //

// Scroll Zoom Start //

// function zoomOut(event) {
  
//     scale += event.deltaY * -0.0005;
  
//     // Restrict scale
//     scale = Math.min(Math.max(.2, scale), 4);
  
//     // Apply scale transform
//     el.style.transform = `scale(${scale})`;
//   }
  
//   let scale = .05;
//   const el = document.querySelector('svg');
//   el.onwheel = zoomOut;

// Scroll Zoom End //

// Mobile Drop Down Menu Start //

document.getElementById("states-dropdown").onchange = function() {
    if(this.value === "alabama") {
        alabamaFunctionMobile();
        zoom(3);
        pan(-500,-400);
        zoomedState = 'ALABAMA';
    } 
    else if(this.value === "alaska") {
        alaskaFunctionMobile();
        zoom(2.75);
        pan(850,-550);
        zoomedState = 'ALASKA';
    }

    else if(this.value === "arizona") {
        arizonaFunctionMobile();
        zoom(3);
        pan(800,-200);
        zoomedState = 'ARIZONA';
    }

    else if(this.value === "arkansas") {
        arkansasFunctionMobile();
        zoom(3);
        pan(-175,-250);
        zoomedState = 'ARKANSAS';
    }

    else if(this.value === "california") {
        californiaFunctionMobile();
        zoom(2.4);
        pan(650,75);
        zoomedState = 'CALIFORNIA';
    }

    else if(this.value === "colorado") {
        coloradoFunctionMobile();
        zoom(3);
        pan(465,65);
        zoomedState = 'COLORADO';
    }

    else if(this.value === "connecticut") {
        connecticutFunctionMobile();
        zoom(3.5);
        pan(-1025,375);
        zoomedState = 'CONNECTICUT';
    }

    else if(this.value === "delaware") {
        delawareFunctionMobile();
        zoom(3.5);
        pan(-950,150);
        zoomedState = 'DELAWARE';
    }

    else if(this.value === "florida") {
        floridaFunctionMobile();
        zoom(2.5);
        pan(-475,-450);
        zoomedState = 'FLORIDA';
    }

    else if(this.value === "georgia") {
        georgiaFunctionMobile();
        zoom(3);
        pan(-600,-350);
        zoomedState = 'GEORGIA';
    }

    else if(this.value === "hawaii") {
        hawaiiFunctionMobile();
        zoom(3);
        pan(525,-600);
        zoomedState = 'HAWAII';
    }

    else if(this.value === "idaho") {
        idahoFunctionMobile();
        zoom(2.7);
        pan(750,480);
        zoomedState = 'IDAHO';
    }

    else if(this.value === "illinois") {
        illinoisFunctionMobile();
        zoom(3);
        pan(-375,150);
        zoomedState = 'ILLINOIS';
    }

    else if(this.value === "indiana") {
        indianaFunctionMobile();
        zoom(3);
        pan(-475,125);
        zoomedState = 'INDIANA';
    }

    else if(this.value === "iowa") {
        iowaFunctionMobile();
        zoom(3);
        pan(-125,225);
        zoomedState = 'IOWA';
    }

    else if(this.value === "kansas") {
        kansasFunctionMobile();
        zoom(3);
        pan(75,0);
        zoomedState = 'KANSAS';
    }

    else if(this.value === "kentucky") {
        kentuckyFunctionMobile();
        zoom(3);
        pan(-500,0);
        zoomedState = 'KENTUCKY';
    }

    else if(this.value === "louisiana") {
        louisianaFunctionMobile();
        zoom(2.8);
        pan(-275,-350);
        zoomedState = 'LOUISIANA';
    }

    else if(this.value === "maine") {
        maineFunctionMobile();
        zoom(2.9);
        pan(-850,500);
        zoomedState = 'MAINE';
    }

    else if(this.value === "maryland") {
        marylandFunctionMobile();
        zoom(3.2);
        pan(-700,100);
        zoomedState = 'MARYLAND';
    }

    else if(this.value === "massachusetts") {
        massachusettsFunctionMobile();
        zoom(3);
        pan(-825,450);
        zoomedState = 'MASSACHUSETTS';
    }

    else if(this.value === "michigan") {
        michiganFunctionMobile();
        zoom(3);
        pan(-500,400);
        zoomedState = 'MICHIGAN';
    }

    else if(this.value === "minnesota") {
        minnesotaFunctionMobile();
        zoom(2.9);
        pan(-100,475);
        zoomedState = 'MINNESOTA';
    }

    else if(this.value === "mississippi") {
        mississippiFunctionMobile();
        zoom(3);
        pan(-400,-350);
        zoomedState = 'MISSISSIPPI';
    }

    else if(this.value === "missouri") {
        missouriFunctionMobile();
        zoom(3);
        pan(-200,0);
        zoomedState = 'MISSOURI';
    }

    else if(this.value === "montana") {
        montanaFunctionMobile();
        zoom(2.8);
        pan(550,500);
        zoomedState = 'MONTANA';
    }

    else if(this.value === "nebraska") {
        nebraskaFunctionMobile();
        zoom(3);
        pan(150,200);
        zoomedState = 'NEBRASKA';
    }

    else if(this.value === "nevada") {
        nevadaFunctionMobile();
        zoom(2.5);
        pan(700,100);
        zoomedState = 'NEVADA';
    }

    else if(this.value === "newhampshire") {
        newhampshireFunctionMobile();
        zoom(3);
        pan(-850,500);
        zoomedState = 'NEWHAMPSHIRE';
    }

    else if(this.value === "newjersey") {
        newjerseyFunctionMobile();
        zoom(3);
        pan(-900,250);
        zoomedState = 'NEWJERSEY';
    }

    else if(this.value === "newmexico") {
        newmexicoFunctionMobile();
        zoom(2.7);
        pan(450,-200);
        zoomedState = 'NEWMEXICO';
    }

    else if(this.value === "newyork") {
        newyorkFunctionMobile();
        zoom(3);
        pan(-900,450);
        zoomedState = 'NEWYORK';
    }

    else if(this.value === "northcarolina") {
        northcarolinaFunctionMobile();
        zoom(2.7);
        pan(-650,-100);
        zoomedState = 'NORTHCAROLINA';
    }

    else if(this.value === "northdakota") {
        northdakotaFunctionMobile();
        zoom(3);
        pan(150,525);
        zoomedState = 'NORTHDAKOTA';
    }

    else if(this.value === "ohio") {
        ohioFunctionMobile();
        zoom(3);
        pan(-600,200);
        zoomedState = 'OHIO';
    }

    else if(this.value === "oklahoma") {
        oklahomaFunctionMobile();
        zoom(2.8);
        pan(50,-150);
        zoomedState = 'OKLAHOMA';
    }

    else if(this.value === "oregon") {
        oregonFunctionMobile();
        zoom(2.8);
        pan(850,450);
        zoomedState = 'OREGON';
    }

    else if(this.value === "pennsylvania") {
        pennsylvaniaFunctionMobile();
        zoom(3);
        pan(-700,250);
        zoomedState = 'PENNSYLVANIA';
    }

    else if(this.value === "rhodeisland") {
        rhodeislandFunctionMobile();
        zoom(3);
        pan(-1025,375);
        zoomedState = 'RHODEISLAND';
    }

    else if(this.value === "southcarolina") {
        southcarolinaFunctionMobile();
        zoom(3);
        pan(-650,-150);
        zoomedState = 'SOUTHCAROLINA';
    }

    else if(this.value === "southdakota") {
        southdakotaFunctionMobile();
        zoom(3);
        pan(150,425);
        zoomedState = 'SOUTHDAKOTA';
    }

    else if(this.value === "tennessee") {
        tennesseeFunctionMobile();
        zoom(3);
        pan(-500,-175);
        zoomedState = 'TENNESSEE';
    }

    else if(this.value === "texas") {
        texasFunctionMobile();
        zoom(2);
        pan(100,-260);
        zoomedState = 'TEXAS';
    }

    else if(this.value === "utah") {
        utahFunctionMobile();
        zoom(2.5);
        pan(650,100);
        zoomedState = 'UTAH';
    }

    else if(this.value === "vermont") {
        vermontFunctionMobile();
        zoom(3);
        pan(-850,500);
        zoomedState = 'VERMONT';
    }

    else if(this.value === "virginia") {
        virginiaFunctionMobile();
        zoom(3);
        pan(-650,0);
        zoomedState = 'VIRGINIA';
    }

    else if(this.value === "washington") {
        washingtonFunctionMobile();
        zoom(2.6);
        pan(775,550);
        zoomedState = 'WASHINGTON';
    }

    else if(this.value === "westvirginia") {
        westvirginiaFunctionMobile();
        zoom(3);
        pan(-700,100);
        zoomedState = 'WESTVIRGINIA';
    }

    else if(this.value === "wisconsin") {
        wisconsinFunctionMobile();
        zoom(3);
        pan(-300,400);
        zoomedState = 'WISCONSIN';
    }

    else if(this.value === "wyoming") {
        wyomingFunctionMobile();
        zoom(2.8);
        pan(450,300);
        zoomedState = 'WYOMING';
    }

}

// Mobile Drop Down Menu End //

// State Bubbles Start //

function alabamaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Alabama";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function alabamaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="al">Alabama</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Alabama<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Alabama<br>Body";
}

function alaskaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Alaska";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function alaskaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Alaska";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Alaska<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Alaska<br>Body";
}

function arizonaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Arizona";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function arizonaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Arizona";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Arizona<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Arizona<br>Body";
}

function arkansasFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Arkansas";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function arkansasFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ar">Arkansas</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Arkansas<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Arkansas<br>Body";
}

function californiaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "California";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function californiaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ca">California</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "California<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "California<br>Body";
}

function coloradoFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="co">Colorado</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Colorado<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Colorado<br>Body";
}

function coloradoFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Colorado";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}
  
function connecticutFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Connecticut";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function connecticutFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ct">Connecticut</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Connecticut<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Connecticut<br>Body";
}

function delawareFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="de">Delaware</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Delaware<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Delaware<br>Body";
}

function delawareFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Delaware";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function floridaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Florida";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function floridaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Florida";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Florida<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Florida<br>Body";
}

function georgiaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Georgia";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function georgiaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Georgia";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Georgia<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Georgia<br>Body";
}

function hawaiiFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Hawaii";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function hawaiiFunction() {
  document.getElementById("bubble-heading").innerHTML = "Hawaii";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Hawaii<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Hawaii<br>Body";
}

function idahoFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Idaho";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function idahoFunction() {
  document.getElementById("bubble-heading").innerHTML = "Idaho";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Idaho<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Idaho<br>Body";
}

function illinoisFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Illinois";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function illinoisFunction() {
  document.getElementById("bubble-heading").innerHTML = "Illinois";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Illinois<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Illinois<br>Body";
}

function indianaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Indiana";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function indianaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Indiana";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Indiana<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Indiana<br>Body";
}

function iowaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Iowa";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function iowaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Iowa";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Iowa<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Iowa<br>Body";
}

function kansasFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Kansas";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function kansasFunction() {
  document.getElementById("bubble-heading").innerHTML = "Kansas";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Kansas<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Kansas<br>Body";
}

function kentuckyFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Kentucky";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function kentuckyFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ky">Kentucky</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Kentucky<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Kentucky<br>Body";
}

function louisianaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Louisiana";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function louisianaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="la">Louisiana</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Louisiana<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Louisiana<br>Body";
}

function maineFunction() {
    document.getElementById("bubble-heading").innerHTML = "Maine";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Maine<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Maine<br>Body";
}

function maineFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Maine";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function marylandFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Maryland";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function marylandFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="md">Maryland</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Maryland<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Maryland<br>Body";
}

function massachusettsFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="ma">Massachusetts</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function massachusettsFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Massachusetts";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function michiganFunction() {
    document.getElementById("bubble-heading").innerHTML = "Michigan";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Michigan<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Michigan<br>Body";
}

function michiganFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Michigan";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
 }
}

function minnesotaFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="mn">Minnesota</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Minnesota<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Minnesota<br>Body";
}

function minnesotaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Minnesota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function mississippiFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="ms">Mississippi</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Mississippi<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Mississippi<br>Body";
}

function mississippiFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Mississippi";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
 }
}

function missouriFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Missouri";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function missouriFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="mo">Missouri</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Missouri<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Missouri<br>Body";
}

function montanaFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="mt">Montana</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Montana<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Montana<br>Body";
}

function montanaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Montana";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function nebraskaFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="ne">Nebraska</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Nebraska<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Nebraska<br>Body";
}

function nebraskaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Nebraska";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function nevadaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Nevada";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function nevadaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Nevada";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Nevada<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Nevada<br>Body";
}

function  newhampshireFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "New Hampshire";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  newhampshireFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="nh">New Hampshire</span>`; 
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "New Hampshire<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "New Hampshire<br>Body";
}

function newjerseyFunction() {
    document.getElementById("bubble-heading").innerHTML = "New Jersey";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "New Jersey<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "New Jersey<br>Body";
}

function newjerseyFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "New Jersey";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function newmexicoFunction() {
    document.getElementById("bubble-heading").innerHTML = "New Mexico";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "New Mexico<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "New Mexico<br>Body";
}

function newmexicoFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "New Mexico";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  newyorkFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "New York";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  newyorkFunction() {
  document.getElementById("bubble-heading").innerHTML = "New York";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "New York<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "New York<br>Body";
}

function  northcarolinaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "North Carolina";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  northcarolinaFunction() {
  document.getElementById("bubble-heading").innerHTML =`<span id="nc">North Carolina</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "North Carolina<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "North Carolina<br>Body";
}

function northdakotaFunction() {
    document.getElementById("bubble-heading").innerHTML = "North Dakota";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "North Dakota<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "North Dakota<br>Body";
}

function northdakotaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "North Dakota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  ohioFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Ohio";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  ohioFunction() {
  document.getElementById("bubble-heading").innerHTML = "Ohio";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Ohio<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Ohio<br>Body";
}

function oklahomaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Oklahoma";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  oklahomaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ok">Oklahoma</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Oklahoma<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Oklahoma<br>Body";
}

function  oregonFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Oregon";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  oregonFunction() {
  document.getElementById("bubble-heading").innerHTML = "Oregon";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Oregon<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Oregon<br>Body";
}

function  pennsylvaniaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Pennsylvania";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  pennsylvaniaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="pa">Pennsylvania</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Pennsylvania<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Pennsylvania<br>Body";
}

function rhodeislandFunction() {
    document.getElementById("bubble-heading").innerHTML = "Rhode Island";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Rhode Island<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Rhode Island<br>Body";
}

function rhodeislandFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Rhode Island";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  southcarolinaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "South Carolina";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  southcarolinaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="sc">South Carolina</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "South Carolina<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "South Carolina<br>Body";
}

function southdakotaFunction() {
    document.getElementById("bubble-heading").innerHTML = "South Dakota";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "South Dakota<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "South Dakota<br>Body";
}

function southdakotaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "South Dakota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("dem-heading").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function tennesseeFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="tn">Tennessee</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Tennessee<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Tennessee<br>Body";
}

function tennesseeFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Tennessee";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function texasFunction() {
    document.getElementById("bubble-heading").innerHTML = "Texas";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Texas<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Texas<br>Body";
}

function texasFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Texas";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  utahFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Utah";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  utahFunction() {
  document.getElementById("bubble-heading").innerHTML = "Utah";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Utah<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Utah<br>Body";
}

function  vermontFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Vermont";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  vermontFunction() {
  document.getElementById("bubble-heading").innerHTML = "Vermont";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Vermont<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Vermont<br>Body";
}

function virginiaFunction() {
    document.getElementById("bubble-heading").innerHTML = "Virginia";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Virginia<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Virginia<br>Body";
}

function virginiaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Virginia";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  washingtonFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Washington";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  washingtonFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="wa">Washington</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Washington<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Washington<br>Body";
}

function westvirginiaFunction() {
    document.getElementById("bubble-heading").innerHTML = "West Virginia";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "West Virginia<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "West Virginia<br>Body";
}

function westvirginiaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "West Virginia";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function wisconsinFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="wi">Wisconsin</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Wisconsin<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Wisconsin<br>Body";
}

function wisconsinFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Wisconsin";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function wyomingFunction() {
    document.getElementById("bubble-heading").innerHTML = "Wyoming";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Wyoming<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Wyoming<br>Body";
}

function wyomingFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Wyoming";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

// Data Bubbles End //








