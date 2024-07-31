package com.RafGamePlay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.RafGamePlay.Service.VideoGiocoService;
import com.RafGamePlay.demo.entities.VIdeoGiocoEntities;

@RestController
@RequestMapping("/api/videoGiochi")
@CrossOrigin
public class VideoGiocoController {
	@Autowired
	private VideoGiocoService videoGiocoService;
	
	@GetMapping
	public List<VIdeoGiocoEntities> getAllVideoGiochi(){
		return videoGiocoService.getAllVideoGiochi();
	}
	
	@GetMapping("/{id}")
	public VIdeoGiocoEntities getVideoGiocoById(@PathVariable long id) {
		return videoGiocoService.getVideoGiocoById(id);
	}
	
	@PostMapping
	public VIdeoGiocoEntities save(@RequestBody  VIdeoGiocoEntities videoGioco) {
		return videoGiocoService.save(videoGioco);
	}
	
	@DeleteMapping("/{id}")
	public void deleteVideoGioco(@PathVariable long id) {
		videoGiocoService.deleteVideoGioco(id);
	}
	
}
