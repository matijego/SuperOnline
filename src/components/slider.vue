<template>
    <div>
                            <div class="row shadow-sm">
                        <div class="col-12">

                           <!-- INDICADORES-->
                            <div id="demo" class="carousel slide" data-ride="carousel">
                                <ul class="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                    <li data-target="#demo" data-slide-to="3"></li>
                                </ul>

                                <!--IMÁGENES-->
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="@/assets/banner/portada-1.jpg" class="w-100" >
                                        <div class="carousel-caption">

                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <img src="@/assets/banner/portada-2.jpg" class="img-fluid w-100">
                                        <div class="carousel-caption">

                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <img src="@/assets/banner/portada-3.jpg" class="img-fluid w-100">
                                        <div class="carousel-caption">

                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <img src="@/assets/banner/portada-4.jpg" class="img-fluid w-100">
                                        <div class="carousel-caption">

                                        </div>
                                    </div>
                                    <a href="#demo" class="carousel-control-prev" data-slide="prev"><span class="carousel-control-prev-icon"></span></a>
                                     <a href="#demo" class="carousel-control-next" data-slide="next"><span class="carousel-control-next-icon"></span></a>                                    
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
</template>

<script>
export default {
    name: 'Slider'
   
}
</script>

