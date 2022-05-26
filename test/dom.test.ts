describe('>> DOM Focus', () => {
  describe('- When focusing a button', () => {
    it('The active element is a BUTTON', () => {
      const button = document.createElement('button');

      document.body.appendChild(button);
      button.focus();

      const activeElement = document.activeElement;
      expect(activeElement?.nodeName).toMatch('BUTTON');
    });
  });
});
