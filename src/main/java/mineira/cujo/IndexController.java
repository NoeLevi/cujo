package mineira.cujo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class IndexController {

	@RequestMapping("/")
	public String index(){
		return "home.xhtml";
	}
	
	@RequestMapping("/cujo")
	public String cujo(){
		return "cujo.xhtml";
	}
	
	@RequestMapping("/contacto")
	public String contacto(){
		return "contacto.xhtml";
	}
	
	@RequestMapping("/legislacao")
	public String legislacao(){
		return "legislacao.xhtml";
	}
	
	@RequestMapping("/servicos")
	public String servicos(){
		return "servicos.xhtml";
	}
	
	@RequestMapping("/galeria")
	public String galeria(){
		return "galeria.xhtml";
	}
	
	@RequestMapping("/descricaoBasalto")
	public String descricaoBasalto(){
		return "descricaoBasalto.xhtml";
	}
	
	
}
