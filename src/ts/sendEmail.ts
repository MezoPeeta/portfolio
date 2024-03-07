const sendContactEmail = () => {
    emailjs.init({
    publicKey: "L3MY38RekyzvVbj2s",
  });
    document
      .getElementById("contact-form")!
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs!.sendForm("service_ea5y6sm", "template_ydh2ija", this).then(
          () => {
            console.log("SUCCESS!");
          },
          (error:any) => {
            console.log("FAILED...", error);
          }
        );
      });
  };
