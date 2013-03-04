// Generated by CoffeeScript 1.3.3
(function() {

  window.AxleSite = (function() {
    AxleSite.prototype.details_url = "http://test.apiaxle.com";
    AxleSite.prototype.redirect_url = "/docs/try-it-now";

    function AxleSite() {
      var _this = this;
      $("#details_form").submit(function() {
        _this.submit_details($("#details_form").serialize());
        return false;
      });
      $("#get_started").on("shown", function() {
        $("#email").focus();
      });
      $("#get_started").on("hide", function() {
        return _this.submit_details($("#details_form").serialize());
      });
    }

    AxleSite.prototype.submit_details = function(query_str) {
      var _this = this;

      $.ajax({
        dataType: "jsonp",
        url: this.details_url + "?" + query_str
      }).always(function () {
        $.cookie('details-entered', 'true', { expires: 365, path: "/" });
        window.location.href = _this.redirect_url;
      });
    };

    return AxleSite;
  })();

  $(document).ready(function() {
    var axle;
    return axle = new AxleSite();
  });

}).call(this);
