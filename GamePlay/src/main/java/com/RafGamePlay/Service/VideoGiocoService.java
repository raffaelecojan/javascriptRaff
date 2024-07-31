package com.RafGamePlay.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RafGamePlay.demo.entities.VIdeoGiocoEntities;
import com.RafGamePlay.demo.repository.VideoGiocoRepository;

@Service
public class VideoGiocoService {

	@Autowired
    private VideoGiocoRepository videoGiocoRepository;

    public List<VIdeoGiocoEntities> getAllVideoGiochi(){
        return videoGiocoRepository.findAll();
    }
    
    public VIdeoGiocoEntities getVideoGiocoById(long id){
        return videoGiocoRepository.findById(id).orElse(null);
    }
    public VIdeoGiocoEntities save(VIdeoGiocoEntities videoGioco) {
    	return videoGiocoRepository.save(videoGioco);
    }
    public void deleteVideoGioco(long id) {
    	videoGiocoRepository.deleteById(id);
    }
	
	
}
