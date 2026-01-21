export const fetchOlympics = async () => {
  try {
    const response = await fetch('/src/assets/mock/olympic.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Olympic service error:', error);
    throw error;
  }
};
