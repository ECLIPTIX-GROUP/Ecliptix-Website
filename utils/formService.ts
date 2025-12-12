
export const submitForm = async (data: any, subject?: string) => {
  const endpoint = "https://formspree.io/f/xgvgndbn";
  
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        subject: subject || "Nouvelle soumission depuis Ecliptix",
        ...data
      })
    });
    
    return response.ok;
  } catch (error) {
    console.error("Erreur d'envoi du formulaire:", error);
    return false;
  }
};
