from playwright.sync_api import sync_playwright

URL = "http://localhost:3000"


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 390, "height": 844})
        page.goto(URL)
        page.wait_for_load_state("networkidle")

        page.screenshot(path="test-results/above-fold.png")

        cta = page.get_by_role("link", name="Chamar no WhatsApp").first
        assert cta.is_visible(), "CTA primário precisa aparecer sem rolar"
        href = cta.get_attribute("href") or ""
        assert href.startswith("https://wa.me/"), href

        box = cta.bounding_box()
        assert box is not None
        assert box["y"] + box["height"] <= 844, "CTA ficou abaixo da dobra no mobile"

        page.get_by_text("Quanto custa?").click()
        assert page.get_by_text("Depende do que a página precisa vender").is_visible()

        page.locator("#lead-name").fill("Ana")
        page.get_by_role("button", name="Enviar pedido de conversa").click()
        assert page.locator("#lead-whatsapp-error").is_visible()
        assert page.locator("#lead-name").input_value() == "Ana"

        browser.close()
        print("ok")


if __name__ == "__main__":
    main()
