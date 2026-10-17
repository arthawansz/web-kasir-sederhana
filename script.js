    let Product1 = document.getElementById("nameProduct1");
    let Product2 = document.getElementById("nameProduct2");
    let Product3 = document.getElementById("nameProduct3");
    let price1 = document.getElementById("priceProduct1");
    let price2 = document.getElementById("priceProduct2");
    let price3 = document.getElementById("priceProduct3");
    let quantity1 = document.getElementById("quantity1");
    let quantity2 = document.getElementById("quantity2");
    let quantity3 = document.getElementById("quantity3");
    let buyButton1 = document.getElementById("buyButton1");
    let buyButton2 = document.getElementById("buyButton2");
    let buyButton3 = document.getElementById("buyButton3");
    let receiptQuantity1 = document.getElementById("receiptQuantity1");
    let receiptQuantity2 = document.getElementById("receiptQuantity2");
    let receiptQuantity3 = document.getElementById("receiptQuantity3");
    let receiptSubtotal1 = document.getElementById("receiptSubtotal1");
    let receiptSubtotal2 = document.getElementById("receiptSubtotal2");
    let receiptSubtotal3 = document.getElementById("receiptSubtotal3");
    let totalPrice = document.getElementById("totalPrice");
    let paymentInput = document.getElementById("paymentInput");
    let changeMoney = document.getElementById("changeMoney");
    let transactionStatus = document.getElementById("transactionStatus");
    let transactionMessage = document.getElementById("transactionMessage");
    let containerStatus = document.getElementById("containerStatus");

    function addQuantity1() {
    quantity1.textContent = Number(quantity1.textContent) + 1;
    receiptQuantity1.textContent = quantity1.textContent;
    }

    function addQuantity2() {
    quantity2.textContent = Number(quantity2.textContent) + 1;
    receiptQuantity2.textContent = quantity2.textContent;
    }

    function addQuantity3() {
    quantity3.textContent = Number(quantity3.textContent) + 1;
    receiptQuantity3.textContent = quantity3.textContent;
    }

    function decreaseQuantity1() {
    if (Number(quantity1.textContent) > 0) {
        quantity1.textContent = Number(quantity1.textContent) - 1;
    }
    receiptQuantity1.textContent = quantity1.textContent;
    }

    function decreaseQuantity2() {
    if (Number(quantity2.textContent) > 0) {
        quantity2.textContent = Number(quantity2.textContent) - 1;
    }
    receiptQuantity2.textContent = quantity2.textContent;
    }

    function decreaseQuantity3() {
    if (Number(quantity3.textContent) > 0) {
        quantity3.textContent = Number(quantity3.textContent) - 1;
    }
    receiptQuantity3.textContent = quantity3.textContent;
    }

    function buyProduct1() {
    Swal.fire({
        title: "Apakah anda yakin ingin membeli produk ini?",
        text: "Anda tidak dapat mengembalikan produk setelah dibeli.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00bf00",
        cancelButtonColor: "#d33",
    });
    let CountSubtotalPrice1 =
        Number(price1.textContent.replace("RP ", "").replace(".", "")) *
        Number(quantity1.textContent);
    receiptSubtotal1.textContent =
        "Rp " + CountSubtotalPrice1.toLocaleString("id-ID");
    calculateTotalPrice();
    }
    function buyProduct2() {
    Swal.fire({
        title: "Apakah anda yakin ingin membeli produk ini?",
        text: "Anda tidak dapat mengembalikan produk setelah dibeli.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00bf00",
        cancelButtonColor: "#d33",
    });
    let CountSubtotalPrice2 =
        Number(price2.textContent.replace("RP ", "").replace(".", "")) *
        Number(quantity2.textContent);
    receiptSubtotal2.textContent =
        "Rp " + CountSubtotalPrice2.toLocaleString("id-ID");
    calculateTotalPrice();
    }

    function buyProduct3() {
    Swal.fire({
        title: "Apakah anda yakin ingin membeli produk ini?",
        text: "Anda tidak dapat mengembalikan produk setelah dibeli.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00bf00",
        cancelButtonColor: "#d33",
    });
    let CountSubtotalPrice3 =
        Number(price3.textContent.replace("RP ", "").replace(".", "")) *
        Number(quantity3.textContent);
    receiptSubtotal3.textContent =
        "Rp " + CountSubtotalPrice3.toLocaleString("id-ID");
    calculateTotalPrice();
    }

    function calculateTotalPrice() {
    let subtotal1 =
        Number(price1.textContent.replace("RP ", "").replace(".", "")) *
        Number(quantity1.textContent);
    let subtotal2 =
        Number(price2.textContent.replace("RP ", "").replace(".", "")) *
        Number(quantity2.textContent);
    let subtotal3 =
        Number(price3.textContent.replace("RP ", "").replace(".", "")) *
        Number(quantity3.textContent);
    let total = subtotal1 + subtotal2 + subtotal3;
    totalPrice.textContent = "Rp " + total.toLocaleString("id-ID");
    }

    function calculateChange() {
    let total = Number(
        totalPrice.textContent.replace("Rp ", "").replace(".", ""),
    );

    Swal.fire({
        title: "Apakah anda yakin customer sudah membayar ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00bf00",
        cancelButtonColor: "#d33",
    });

    if (paymentInput.value > total) {
        let payment = Number(paymentInput.value);
        let change = payment - total;
        changeMoney.textContent = "Rp " + change.toLocaleString("id-ID");

        transactionStatus.textContent = "Transaksi berhasil";
        transactionMessage.textContent = "Terima kasih telah berbelanja!";
        transactionStatus.classList.replace("text-slate-700", "text-green-700");
        transactionMessage.classList.replace("text-slate-700", "text-green-700");
        containerStatus.classList.replace("border-slate-200", "border-green-200");
        containerStatus.classList.replace("bg-slate-50", "bg-green-50");
    } else if (paymentInput.value == total) {
        Swal.fire({
        title: "Uang Pas",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#00bf00",
        });
        changeMoney.textContent = "Rp0";

        transactionStatus.textContent = "Transaksi berhasil";
        transactionMessage.textContent = "Terima kasih telah berbelanja!";
        transactionStatus.classList.replace("text-slate-700", "text-green-700");
        transactionMessage.classList.replace("text-slate-700", "text-green-700");
        containerStatus.classList.replace("border-slate-200", "border-green-200");
        containerStatus.classList.replace("bg-slate-50", "bg-green-50");
    } else {
        Swal.fire({
        title: "Uang tidak cukup !",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#00bf00",
        cancelButtonColor: "#d33",
        });
        changeMoney.textContent = "Rp0";
    }
    }

    function resetTransaction() {
    location.reload();
    }
