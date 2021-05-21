(function(window, undefined) {
  var dictionary = {
    "9fce1091-2cc1-4b6d-b880-360b9cd9c686": "Ajustes_C",
    "bf884546-683d-416c-95d2-254b37a22212": "Contraseña1",
    "10b2ae3f-7b1b-499b-90a1-bbecac7c0ede": "Contraseña2",
    "ed1a58ef-7ca9-4fb7-aff9-2208c11aeabc": "Estado",
    "afcbba9e-dac0-4120-9f19-521d7bea228b": "Login",
    "bb1dfb07-ff96-4283-b126-5c1f27c54859": "Mesas1",
    "0deeb7ca-8b29-4014-9422-aeec10ee10ce": "Buzon1",
    "32745e70-4d2e-4e8c-b5a3-2300e7bd4349": "Pedido",
    "e996a94e-e952-4bf8-adb7-9b158db73caa": "PlatosMesaIngredientes",
    "c0586143-98be-4cde-b01e-3b24505f805d": "Platos1",
    "c4e561c7-5ae0-4a39-b19d-e5de2d85f4f6": "Camareros1",
    "20b0b79a-007c-4734-b9eb-9bec6f155377": "Registrase",
    "74bb3b0f-d86e-4df3-b44c-4afff6b518be": "Platos2",
    "9a8c17a7-9420-42c5-bd6c-b62278f4c90f": "Platos",
    "1a631065-d6cf-4391-93c5-10ac13d36120": "Extras",
    "51334570-d481-4cd8-89a6-62326e9cb366": "Pago",
    "45a6d659-b2f7-4893-8b00-89f5618e657b": "Ingredientes1",
    "56046cb9-60ed-4ae9-9375-e0cd2dc3b835": "Propina",
    "ed1744ae-96cf-410b-929b-cc57c4795c06": "PlatosMesa",
    "23ee6fd7-0b90-4b88-8d0f-34e8ff28be0c": "Reserva",
    "2902eccb-781c-4c48-8ed4-2892d70edb68": "Buzon",
    "672a9d6a-0682-49e8-b963-d9d1aa6100d7": "Camareros",
    "bc956b78-03d2-40a1-9397-277be77ada8e": "Ajustes_U",
    "5838b3ce-3f12-4ea5-b2c4-4b70bee182da": "Ajustes_G",
    "5b2a223f-579b-4d21-b906-750835ef9261": "Ingredientes",
    "0534ba30-7c9a-435f-b6b7-088e2e7bb63d": "Reservas",
    "03f0010f-3337-4204-b688-9295edf54905": "Mesas",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);