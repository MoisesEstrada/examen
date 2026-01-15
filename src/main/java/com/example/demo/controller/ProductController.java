package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.findAll());
    }

    // Endpoint para filtrar: /api/products/filter?categoryId=1
    @GetMapping("/filter")
    public ResponseEntity<List<Product>> getProductsByCategory(@RequestParam Long categoryId) {
        return ResponseEntity.ok(productService.findByCategoryId(categoryId));
    }
}