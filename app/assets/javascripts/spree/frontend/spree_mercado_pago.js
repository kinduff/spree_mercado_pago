//= require spree/frontend

MercadoPago = {
  hidePaymentSaveAndContinueButton: function(paymentMethod) {
    if (MercadoPago.paymentMethodID && paymentMethod.val() == MercadoPago.paymentMethodID) {
      $('.form-buttons').hide();
      $('[data-hook=coupon_code]').hide();
    } else {
      $('.form-buttons').show();
      $('[data-hook=coupon_code]').show();
    }
  }
};

window.onload=function(){
  checkedPaymentMethod = $('div[data-hook="checkout_payment_step"] input[type="radio"]:checked');

  MercadoPago.hidePaymentSaveAndContinueButton(checkedPaymentMethod);
  paymentMethods = $('div[data-hook="checkout_payment_step"] input[type="radio"]').click(function (e) {
    MercadoPago.hidePaymentSaveAndContinueButton($(e.target));
  });

  $('button.mercado_pago_button').click(function(event){
    $(event.target).prop("disabled",true);
  });
};
