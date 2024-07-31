package com.RafGamePlay.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.RafGamePlay.demo.entities.VIdeoGiocoEntities;

@Repository
public interface VideoGiocoRepository extends JpaRepository<VIdeoGiocoEntities, Long>{
	//query
}
